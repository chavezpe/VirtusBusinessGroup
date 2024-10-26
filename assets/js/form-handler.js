document.querySelector('.contact-form-contact').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://api.github.com/repos/chavezpe/VirtusBusinessGroup/dispatches', {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github.everest-preview+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_type: 'form_submission',
                client_payload: formData
            })
        });

        if (response.ok) {
            alert('Your message has been sent!');
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    }
});