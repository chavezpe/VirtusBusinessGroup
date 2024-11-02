// Variables to track the scroll position
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the scroll distance
    const scrollDistance = currentScrollTop - lastScrollTop;

    // If scrolling down, hide the header
    if (scrollDistance > 0) {
        const currentHeaderTop = parseInt(header.style.top) || 0;
        const newTop = Math.max(currentHeaderTop - scrollDistance, -header.offsetHeight);
        header.style.top = `${newTop}px`;
    } else {
        // If scrolling up, show the header
        const currentHeaderTop = parseInt(header.style.top) || 0;
        const newTop = Math.min(currentHeaderTop - scrollDistance, 0);
        header.style.top = `${newTop}px`;
    }


    // Update last scroll position
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

    // Add a class to the header if scrolled down to apply shadow
    if (currentScrollTop > 0) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});




