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