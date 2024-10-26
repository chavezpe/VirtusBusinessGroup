function clearForm(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Submit the form manually
        event.target.submit();

        // Clear the form fields after submission
        setTimeout(() => {
            document.getElementById("first-name").value = "";
            document.getElementById("last-name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your message has been sent!");
        }, 500); // Delay to ensure form submission completes
    }