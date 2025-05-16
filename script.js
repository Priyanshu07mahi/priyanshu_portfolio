document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for hero section
    const textElement = document.querySelector('.typing-text');
    const phrases = [
        'Computer Science Student',
        'Web Developer',
        'Tech Enthusiast'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1500;
        }
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        setTimeout(typeText, typingSpeed);
    }
    if (textElement) setTimeout(typeText, 1000);

    // Technologies hover effect (mouse position for radial gradient)
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.style.setProperty('--x', `${x}px`);
            this.style.setProperty('--y', `${y}px`);
        });
        item.addEventListener('mouseleave', function() {
            this.style.setProperty('--x', `50%`);
            this.style.setProperty('--y', `50%`);
        });
    });

    // Scroll reveal animation with stagger
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.reveal-element');
        let delay = 0;
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible && !element.classList.contains('active')) {
                setTimeout(() => {
                    element.classList.add('active');
                }, delay);
                delay += 120; // 120ms stagger between each reveal
            }
        });
    }
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Pop-out effect for experience and project cards on mouse hover
    function addPopOutEffect(selector) {
        document.querySelectorAll(selector).forEach(card => {
            card.addEventListener('mousemove', function(e) {
                card.classList.add('hovered');
            });
            card.addEventListener('mouseleave', function() {
                card.classList.remove('hovered');
            });
        });
    }
    addPopOutEffect('.exp-card');
    addPopOutEffect('.project-card');
});