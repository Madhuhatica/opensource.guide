---
layout:
---
// http://jekyll.tips/jekyll-casts/jekyll-search-using-lunr-js/

importScripts("{{ "/js/lunr.min.js" | relative_url }}");

var store = {
{% for article in site.articles %}
  {% capture html %}{% include search-result.html article=article %}{% endcapture %}
  "{{ article.url | xml_escape }}": {
    "title": "{{ article.title | xml_escape }}",
    "content": {{ article.content | markdownify | strip_html | strip_newlines | jsonify }},
    "url": "{{ article.url | xml_escape }}",
    "html": {{ html | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
};

// Initialize lunr
var idx = lunr(function () {
  this.ref('url');
  this.field('title', { boost: 10 });
  this.field('content');
});

// Add content to index
for(var id in store) {
  idx.add(store[id]);
}

/**
 * Handles incoming messages, performs a search using the provided data, and posts the results.
 * @param {MessageEvent} e - The message event containing the search query data.
 * @returns {void} This function doesn't return a value, but posts the search results via postMessage.
 */
onmessage = function (e) {
  var results = idx.search(e.data).map(function(result) {
    return store[result.ref].html;
  });
  postMessage(results);
}
