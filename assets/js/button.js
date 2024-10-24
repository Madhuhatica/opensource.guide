
/**
 * Adds a scroll event listener to show/hide the 'scroll to top' button based on scroll position.
 * @param {Event} event - The scroll event object (not directly used in the function body).
 * @returns {void} This function does not return a value.
 */
window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

/**
 * Adds a click event listener to the 'scrollToTopButton' element that smoothly scrolls the window to the top when clicked.
 * @param {Event} event - The click event object (automatically passed by the event listener).
 * @returns {void} This method does not return a value.
 */
document.getElementById('scrollToTopButton').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

