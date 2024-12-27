document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const memberName = urlParams.get('name');

    if (!memberName) {
        console.error("No member name specified in the URL");
        return;
    }

    // Load and parse CSV
    Papa.parse('../assets/data/team.csv', {
        download: true,
        header: true,
        complete: function (results) {
            const memberData = results.data.find(member => member.name === memberName);
            if (memberData) {
                populateProfile(memberData);
            } else {
                console.error("Member not found");
            }
        },
        error: function (error) {
            console.error("Error loading CSV:", error);
        }
    });

    function populateProfile(member) {
        // Set image with a fallback for missing data
        const profileImage = document.getElementById('profile-image');
        profileImage.src = member.image || '../images/default-profile.png';
        profileImage.alt = `${member.name} - ${member.title} at Virtus Business Group`;

        // Set page title and header
        document.getElementById('profile-name-header').textContent = member.name;
        document.getElementById('profile-name-page').textContent = `${member.name} | Virtus Business Group`;

        // Set profile details
        document.getElementById('profile-name').textContent = member.name;
        document.getElementById('profile-title').textContent = member.title;

        // Populate bio with line breaks and safe HTML (if necessary)
        document.getElementById('profile-bio').innerHTML = member.bio ? member.bio.replace(/\n/g, "<br>") : "Bio not available.";

        // Set LinkedIn link
        const linkedinElement = document.getElementById('profile-linkedin');
        if (member.linkedin) {
            linkedinElement.href = member.linkedin;
            linkedinElement.textContent = "Connect on LinkedIn";
        } else {
            linkedinElement.style.display = "none"; // Hide LinkedIn link if unavailable
        }

        addSchemaMarkup(member);

        // Optional: Update meta description for SEO
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", `Learn more about ${member.name}, ${member.title} at Virtus Business Group. ${member.bio ? member.bio.substring(0, 150) + '...' : ''}`);
        }
    }
});

function addSchemaMarkup(member) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.title,
        "worksFor": {
            "@type": "Organization",
            "name": "Virtus Business Group"
        },
        "url": `https://virtusbg.com/team/${encodeURIComponent(member.name.replace(/\s+/g, '-').toLowerCase())}`,
        "sameAs": member.linkedin ? [member.linkedin] : []
    };

    // Convert the schema data to JSON
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);

    // Append to the <head> section
    document.head.appendChild(script);
}
