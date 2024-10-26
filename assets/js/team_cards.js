document.addEventListener("DOMContentLoaded", function () {
  // Load and parse CSV
  Papa.parse('../data/team.csv', {
    download: true,
    header: true,
    complete: function (results) {
      generateTeamCards(results.data);
    }
  });

  function generateTeamCards(data) {
    const teamContainer = document.querySelector('main'); // Replace with your container
    data.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('team-card');

      // Generate HTML for each card
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.title}</p>
        <a href="team-member-profile.html?name=${encodeURIComponent(member.name)}">View Profile</a>
      `;
      teamContainer.appendChild(card);
    });
  }
});