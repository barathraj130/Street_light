document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons
    lucide.createIcons();

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Dashboard Simulation
    const energyStat = document.getElementById('energyStat');
    const nodeStat = document.getElementById('nodeStat');

    if (energyStat && nodeStat) {
        setInterval(() => {
            const baseEnergy = 78.4;
            const fluctuation = (Math.random() * 2 - 1).toFixed(1);
            energyStat.innerText = (parseFloat(baseEnergy) + parseFloat(fluctuation)).toFixed(1) + '%';
            
            const baseNodes = 1248;
            const nodeChange = Math.floor(Math.random() * 3) - 1;
            nodeStat.innerText = (baseNodes + nodeChange).toLocaleString();
        }, 3000);
    }

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission (Simulated)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Inquiry Sent!';
            btn.style.background = 'var(--secondary)';
            btn.style.color = '#000';
            contactForm.reset();
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = 'var(--grad-primary)';
            }, 3000);
        });
    }
});
