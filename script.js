document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a stat number, animate it
                if (entry.target.classList.contains('stat-card')) {
                    animateValue(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.querySelectorAll('.stat-card').forEach(el => observer.observe(el));

    // Stats Animation
    function animateValue(obj) {
        if (obj.dataset.animated) return;
        obj.dataset.animated = "true";
        
        const target = parseFloat(obj.innerText.replace(/,/g, ''));
        const isPercentage = obj.innerText.includes('%');
        const isKm = obj.innerText.includes('km');
        const isHours = obj.innerText.includes('24/7');
        
        if (isHours) return; // Don't animate 24/7

        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            const current = Math.floor(easeProgress * target);
            
            if (isPercentage) {
                obj.innerText = current + '%';
            } else if (isKm) {
                obj.innerText = current + 'km';
            } else {
                obj.innerText = current.toLocaleString();
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    // Dashboard Data Simulation
    const widgets = document.querySelectorAll('.widget-value');
    if (widgets.length > 0) {
        setInterval(() => {
            // Randomly update energy consumption
            const energyWidget = widgets[2];
            const currentEnergy = parseFloat(energyWidget.innerText);
            const newValue = (currentEnergy + Math.random() * 0.1).toFixed(1);
            energyWidget.innerText = newValue + ' kWh';
            
            // Occasionally trigger a "fault" simulation
            if (Math.random() > 0.95) {
                const faultWidget = widgets[1];
                faultWidget.innerText = '03';
                faultWidget.style.color = '#ff4d4d';
                setTimeout(() => {
                    faultWidget.innerText = '02';
                    faultWidget.style.color = '';
                }, 3000);
            }
        }, 3000);
    }

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.style.background = '#00ff9d';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
