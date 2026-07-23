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
    const elements = document.querySelectorAll('.section .container, footer .container, .reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // 3.5 Time-based Reveal for Hero Image (1.3s delay)
    setTimeout(() => {
        const delayedReveal = document.querySelector('.delayed-scroll-reveal');
        if (delayedReveal && !delayedReveal.classList.contains('reveal-active')) {
            delayedReveal.classList.add('reveal-active');
        }
    }, 1300);

    // 3.6 Scroll Reveal specifically for the Name
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            const nameReveal = document.querySelector('.name-scroll-reveal');
            if (nameReveal && !nameReveal.classList.contains('reveal-active')) {
                nameReveal.classList.add('reveal-active');
            }
        }
    });

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

    // 6. FAB Logic
    const fabToggle = document.getElementById('fab-toggle');
    const fabContainer = document.getElementById('fab-container');
    if (fabToggle && fabContainer) {
        fabToggle.addEventListener('click', () => {
            fabContainer.classList.toggle('active');
        });
        
        // Close FAB menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!fabContainer.contains(e.target) && fabContainer.classList.contains('active')) {
                fabContainer.classList.remove('active');
            }
        });
    }

    // 7. Modal Logic
    const modalOverlay = document.getElementById('contact-modal');
    const modalClose = document.getElementById('modal-close');
    const joinBtn = document.querySelector('.fab-join');
    
    if (joinBtn && modalOverlay) {
        joinBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link jump
            modalOverlay.classList.add('active');
            if(fabContainer) fabContainer.classList.remove('active'); // Close FAB menu
        });
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modalOverlay.classList.remove('active');
            });
        }
        
        // Close modal when clicking outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // 8. Testimonial Slider
    const track = document.getElementById('testimonial-slider-track');
    const dots = document.querySelectorAll('.slider-dots .dot');
    if (track && track.children.length > 0) {
        const originalCards = Array.from(track.children);
        
        // Clone for infinite loop
        originalCards.forEach(card => {
            track.appendChild(card.cloneNode(true));
        });
        
        let index = 0;
        const totalOriginal = originalCards.length;
        
        function updateSlider() {
            const card = track.children[0];
            const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
            const moveAmount = card.offsetWidth + gap;
            
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${index * moveAmount}px)`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === (index % totalOriginal));
            });
        }
        
        function nextSlide() {
            index++;
            updateSlider();
            
            if (index === totalOriginal) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    index = 0;
                    const card = track.children[0];
                    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
                    const moveAmount = card.offsetWidth + gap;
                    track.style.transform = `translateX(0px)`;
                }, 500); // Matches the CSS transition duration
            }
        }
        
        setInterval(nextSlide, 3000); // Auto slide every 3 seconds
        
        window.addEventListener('resize', () => {
            track.style.transition = 'none';
            updateSlider();
        });
    }
});
