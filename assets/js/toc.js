/**
 * Initializes document-wide click handlers and table of contents (ToC) toggle functionality.
 * This method sets up event listeners for hiding the ToC when clicking outside,
 * and toggling the ToC visibility when clicking on the trigger element.
 *
 * @param {void} No parameters
 * @returns {void} This function does not return a value
 *
 * @example
 * // This function is typically called when the DOM is ready:
 * $(function() {
 *   // Function body here
 * });
 */
$(function() {
    $(document).click(function() {
      // Hiding ToC
      $('.toc-trigger').removeClass('toc-open');
      $('.toc-list').removeClass('is-shown');
    });

    // Toggle Nav on Click
    $('.toc-trigger').click(function(e) {
        // Prevent bubbling event for proper hiding
        e.stopPropagation();
        // Calling a function in case you want to expand upon this.
        $(this).toggleClass('toc-open');
        $('.toc-list').toggleClass('is-shown');
    });
});
