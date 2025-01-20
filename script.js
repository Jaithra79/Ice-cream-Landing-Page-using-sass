const navbarToggler = document.querySelector('.navbar_top--toggler');
const navbarCollapse = document.querySelector('.navbar__collapse');
navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('change');
    navbarToggler.classList.toggle('show__nav');
});