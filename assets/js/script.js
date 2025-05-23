const checkbox = document.getElementById('theme-checkbox')
const htmlElement = document.documentElement

// Load saved theme
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
    htmlElement.className = 'dark'
    checkbox.checked = true
}

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        htmlElement.className = 'dark'
        localStorage.setItem('theme', 'dark')
    } else {
        htmlElement.className = 'light'
        localStorage.setItem('theme', 'light')
    }
})



function menuIcon() {
    document.querySelector('.menu-list').classList.toggle('show')
    document.querySelector('nav').classList.toggle('activeNavBar');
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the modal and close button elements
    const modal = document.getElementById("exampleModal");
    const closeBtn = modal.querySelector(".delete");

    // Add click event listener to the close button
    closeBtn.addEventListener("click", function () {
        modal.remove(); // Removes the modal from the DOM
        location.reload();
    });
});