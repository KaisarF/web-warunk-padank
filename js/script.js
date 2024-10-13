const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('open');
}

document.addEventListener('click', function(e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('open');
    }
});
