document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // 2. Close mobile menu automatically after clicking a link
    const navLinks = document.querySelectorAll('.nav-item:not(.dropdown) .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });

    // Optional: Add a subtle pulse animation to the main CTA button periodically
    const ctaButton = document.querySelector('.animate-pulse');
    if(ctaButton) {
        setInterval(() => {
            ctaButton.classList.add('animate__animated', 'animate__pulse');
            ctaButton.addEventListener('animationend', () => {
                ctaButton.classList.remove('animate__animated', 'animate__pulse');
            }, {once: true});
        }, 5000); // Pulses every 5 seconds
    }
});
