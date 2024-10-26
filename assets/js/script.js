// Select relevant elements
const openFormButton = document.getElementById('openForm');
const closeModalButton = document.getElementById('closeModal');
const interestForm = document.getElementById('interestForm');

// Open modal when button is clicked (This part is for the modal)
openFormButton.addEventListener('click', function() {
    if (interestForm.style.display === 'none' || interestForm.style.display === '') {
        interestForm.style.display = 'block'; // Show the form
    } else {
        interestForm.style.display = 'none'; // Hide the form
    }
});

// Close modal when close button is clicked
closeModalButton.addEventListener('click', function() {
    interestForm.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside of modal content
window.addEventListener('click', function(event) {
    if (event.target === interestForm) {
        interestForm.style.display = 'none'; // Hide the modal
    }
});

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




