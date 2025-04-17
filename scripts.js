const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use device preference
const currentTheme = localStorage.getItem('theme') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the current theme
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
} else {
    document.body.removeAttribute('data-theme');
}

// Handle toggle click
themeToggle.addEventListener('click', function() {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});