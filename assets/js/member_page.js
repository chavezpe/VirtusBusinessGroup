document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const memberName = urlParams.get('name'); // Assuming the URL has ?name=John Doe

    // Load and parse CSV
    Papa.parse('../data/team.csv', {
        download: true,
        header: true,
        complete: function (results) {
            const memberData = results.data.find(member => member.name === memberName);
            console.log(memberData);
            if (memberData) {
                populateProfile(memberData);
            } else {
                console.error("Member not found");
            }
        }
    });

    function populateProfile(member) {
        document.getElementById('profile-image').src = member.image;
        document.getElementById('profile-name-header').textContent = member.name;
        document.getElementById('profile-name-page').textContent = member.name;
        document.getElementById('profile-name').textContent = member.name;
        document.getElementById('profile-title').textContent = member.title;
        // document.getElementById('profile-email').textContent = member.email;
        document.getElementById('profile-bio').innerHTML = member.bio.replace(/\n/g, "<br>");
        const linkedinElement = document.getElementById('profile-linkedin');
        linkedinElement.href = member.linkedin; // Set the LinkedIn URL from the member data
        linkedinElement.textContent = "LinkedIn"; // Set text to display as "LinkedIn"

    }
});