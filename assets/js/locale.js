/**
 * Sets up a change event listener for the language dropdown menu.
 * When the selected language changes, it triggers the loadLanguage function.
 * This function is executed when the DOM is fully loaded.
 * @param {void} No parameters
 * @returns {void} This function does not return a value
 */
$(document).ready(function() {
  $('#language').change(function() {
    loadLanguage($('#language option:selected').val());
  });
});

/**
 * Loads a specified language by redirecting to the appropriate URL.
 * @param {string} lang - The language code to load (e.g., "en" for English).
 * @returns {void} This function does not return a value. It redirects the browser to a new URL.
 */
function loadLanguage(lang) {
  base_pathname = window.location.pathname.replace(/\/[a-z]+([_-][a-z]+)?\//, "/")
  if (lang === "en") {
    url = base_pathname
  } else {
    url = "/" + lang + base_pathname
  }
  window.location.assign(url);
}
