function toggleSolution(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling.querySelector('.toggle-button');

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "-"; // Change the plus to minus when expanded
    } else {
        content.style.display = "none";
        button.textContent = "+"; // Change back to plus when collapsed
    }
}