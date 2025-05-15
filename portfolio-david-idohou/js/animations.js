document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des animations avec Anime.js
    
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Fonction pour animer les éléments lorsqu'ils entrent dans la vue
    function animateElementsOnScroll() {
        const elements = document.querySelectorAll('[data-anime]');
        
        elements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                const animation = element.getAttribute('data-anime');
                const delay = element.getAttribute('data-anime-delay') || 0;
                
                setTimeout(() => {
                    // Utiliser Anime.js pour les animations
                    switch (animation) {
                        case 'fadeIn':
                            anime({
                                targets: element,
                                opacity: [0, 1],
                                duration: 1000,
                                easing: 'easeInOutQuad'
                            });
                            break;
                        case 'fadeInUp':
                            anime({
                                targets: element,
                                opacity: [0, 1],
                                translateY: [50, 0],
                                duration: 1000,
                                easing: 'easeOutQuad'
                            });
                            break;
                        case 'fadeInDown':
                            anime({
                                targets: element,
                                opacity: [0, 1],
                                translateY: [-50, 0],
                                duration: 1000,
                                easing: 'easeOutQuad'
                            });
                            break;
                        case 'fadeInLeft':
                            anime({
                                targets: element,
                                opacity: [0, 1],
                                translateX: [-50, 0],
                                duration: 1000,
                                easing: 'easeOutQuad'
                            });
                            break;
                        case 'fadeInRight':
                            anime({
                                targets: element,
                                opacity: [0, 1],
                                translateX: [50, 0],
                                duration: 1000,
                                easing: 'easeOutQuad'
                            });
                            break;
                        case 'zoomIn':
                            anime({
                                targets: element,
                                opacity: [0, 1],
                                scale: [0.5, 1],
                                duration: 1000,
                                easing: 'easeOutQuad'
                            });
                            break;
                        default:
                            anime({
                                targets: element,
                                opacity: [0, 1],
                                duration: 1000,
                                easing: 'easeInOutQuad'
                            });
                    }
                    
                    element.classList.add('animated');
                }, delay);
            }
        });
    }
    
    // Animer les éléments visibles au chargement de la page
    animateElementsOnScroll();
    
    // Animer les éléments au défilement
    window.addEventListener('scroll', animateElementsOnScroll);
    
    // Animation de la section hero
    anime({
        targets: '#home h1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        easing: 'easeOutQuad',
        delay: 300
    });
    
    anime({
        targets: '#home p',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        easing: 'easeOutQuad',
        delay: anime.stagger(200, {start: 500})
    });
    
    anime({
        targets: '#home .flex.flex-wrap.gap-4 a',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(150, {start: 800})
    });
    
    // Animation de la machine à écrire pour le sous-titre
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = '';
        
        let i = 0;
        const speed = 100; // vitesse de frappe en ms
        
        function typeWriter() {
            if (i < text.length) {
                typewriter.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        setTimeout(() => {
            typeWriter();
        }, 1000);
    }
    
    // Animation des barres de compétences
    function animateSkillBars() {
        anime({
            targets: '.skill-level',
            width: function(el) {
                return el.getAttribute('data-level') + '%';
            },
            duration: 1500,
            easing: 'easeInOutQuart',
            delay: anime.stagger(100)
        });
    }
    
    // Observer pour déclencher l'animation des compétences
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
});
