document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Close mobile menu automatically after clicking a link
    const navLinks = document.querySelectorAll('.nav-item .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });
});
