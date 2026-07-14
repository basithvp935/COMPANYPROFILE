document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // 2. Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Wait for the transition to finish before hiding completely
        }, 2000);
    }

    // 3. Intersection Observer (Scroll Reveal)
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' } 
    );
    const elements = document.querySelectorAll('.section .container, footer .container');
    elements.forEach((el) => observer.observe(el));

    // 4. Hero Student Count Logic
    const studentCountEl = document.getElementById('student-count');
    if (studentCountEl) {
        let start = 0;
        const target = 1000;
        const duration = 3000; // 3 seconds
        const increment = target / (duration / 16); // 60 fps
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                studentCountEl.textContent = target + '+';
                clearInterval(timer);
            } else {
                studentCountEl.textContent = Math.floor(start) + '+';
            }
        }, 16);
    }

    // 5. Mobile Menu Toggle
    const mobileToggleBtn = document.getElementById('mobile-menu-btn');
    const navRight = document.querySelector('.nav-right');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    if (mobileToggleBtn && menuIcon) {
        mobileToggleBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menuIcon.setAttribute('data-lucide', 'x');
                // You might need to toggle a class on navRight to show/hide the menu in mobile
                navRight.classList.add('open');
            } else {
                menuIcon.setAttribute('data-lucide', 'menu');
                navRight.classList.remove('open');
            }
            if (typeof lucide !== 'undefined') {
                lucide.createIcons(); // Re-render the icon
            }
        });
    }
});
