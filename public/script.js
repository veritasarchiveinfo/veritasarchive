document.addEventListener('DOMContentLoaded', () => {
    // Menu Logic
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // Toggle classes
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('open');

            // Toggle body scroll
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        // Close when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // Scroll Down Functionality
    const scrollArrow = document.querySelector('.scroll-indicator');
    const scrollTargets = document.querySelectorAll('section[id]'); // Generic selector

    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            // Find the next section or specifically #latest-intel
            const target = document.getElementById('latest-intel') || document.querySelector('section:nth-of-type(2)');
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // PGP Copy Button
    const copyBtn = document.getElementById('copy-pgp-btn');
    const pgpKeyText = document.getElementById('pgp-key-content');

    if (copyBtn && pgpKeyText) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(pgpKeyText.textContent);
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span>✓ Copied</span>';
                copyBtn.style.backgroundColor = '#1d1d1f';
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.style.backgroundColor = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
