---
---

{% include_relative jquery.min.js %}
{% include_relative anchor.min.js %}
{% include_relative toc.js %}
{% include_relative locale.js %}
{% include_relative button.js %}

/**
 * Adds anchor links to headings in the article body
 * 
 * This function sets up and applies anchor links to specific heading elements
 * within the article body. It uses the 'anchors' library to add the links and
 * configures the placement of these anchors.
 * 
 * @returns {void} This function does not return a value
 */
(function() {
  var selector = '.article-body h2, .article-body h3, .article-body h4, .article-body h5';
  anchors.options = {
    placement: 'left'
  };
  anchors.add(selector);

  $(selector).wrapInner('<span/>');
})();

/**
 * Checks if today is Friday and displays an element if true.
 * This function is an Immediately Invoked Function Expression (IIFE)
 * that determines the current day of the week. If it's Friday,
 * it shows an element with the id "opensourcefriday".
 * 
 * @returns {void} This function doesn't return a value
 */
(function() {
  var FRIDAY = 5;
  var today = new Date();
  if (FRIDAY == today.getDay()) {
    $("#opensourcefriday").show();
  }
})();
