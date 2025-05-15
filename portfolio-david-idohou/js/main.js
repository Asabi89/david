document.addEventListener('DOMContentLoaded', function() {
    // Masquer le loader après chargement de la page
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('opacity-0');
            setTimeout(function() {
                loader.classList.add('hidden');
            }, 500);
        }
    }, 1000);
    
    // Gestion du menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animation du menu mobile
            if (!mobileMenu.classList.contains('hidden')) {
                anime({
                    targets: '#mobile-menu a',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeOutQuad',
                    delay: anime.stagger(50)
                });
            }
        });
    }
    
    // Gestion des onglets de compétences
    const skillsTabs = document.querySelectorAll('.skills-tab');
    
    skillsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Retirer la classe active de tous les onglets
            skillsTabs.forEach(t => {
                t.classList.remove('active');
                t.classList.remove('bg-primary-600');
                t.classList.remove('text-white');
                t.classList.add('bg-gray-200');
                t.classList.add('text-gray-700');
            });
            
            // Ajouter la classe active à l'onglet cliqué
            this.classList.add('active');
            this.classList.add('bg-primary-600');
            this.classList.add('text-white');
            this.classList.remove('bg-gray-200');
            this.classList.remove('text-gray-700');
            
            // Masquer toutes les catégories
            document.querySelectorAll('.skill-category').forEach(category => {
                category.classList.add('hidden');
            });
            
            // Afficher la catégorie correspondante
            const target = this.getAttribute('data-target');
            const targetCategory = document.getElementById(target);
            
            if (targetCategory) {
                targetCategory.classList.remove('hidden');
                
                // Animer l'apparition de la catégorie
                anime({
                    targets: `#${target} .skill-item`,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutQuad',
                    delay: anime.stagger(100)
                });
                
                // Animer les barres de compétences
                setTimeout(() => {
                    anime({
                        targets: `#${target} .skill-level`,
                        width: function(el) {
                            return el.getAttribute('data-level') + '%';
                        },
                        duration: 1000,
                        easing: 'easeInOutQuart',
                        delay: anime.stagger(100)
                    });
                }, 300);
            }
        });
    });
    
    // Gestion des modales de projet
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    const modalDemo = document.getElementById('modal-demo');
    const modalGithub = document.getElementById('modal-github');
    const modalContentContainer = document.getElementById('modal-content-container');
    
    // Données des projets
    const projectsData = {
        'kabako': {
            title: 'Kabako - Application Kanban',
            description: `
                <p class="text-gray-700 mb-4">Kabako est une application de gestion de projets basée sur la méthode Kanban, permettant aux équipes de visualiser leur flux de travail et d'optimiser leur productivité.</p>
                <p class="text-gray-700 mb-4">Cette application offre une interface intuitive pour créer des tableaux Kanban, ajouter des tâches, les déplacer entre différentes colonnes et suivre la progression des projets en temps réel.</p>
                <h4 class="text-lg font-medium text-gray-800 mb-2">Fonctionnalités principales:</h4>
                <ul class="list-disc pl-5 mb-4 text-gray-700">
                    <li>Création de tableaux Kanban personnalisés</li>
                    <li>Gestion des tâches par glisser-déposer</li>
                    <li>Assignation de membres d'équipe aux tâches</li>
                    <li>Suivi du temps et des échéances</li>
                    <li>Notifications et rappels automatiques</li>
                    <li>Rapports d'avancement et statistiques</li>
                </ul>
                <h4 class="text-lg font-medium text-gray-800 mb-2">Technologies utilisées:</h4>
                <p class="text-gray-700">JavaScript, Django, MySQL,Tailwindcss ,CSS,  WebSockets pour les mises à jour en temps réel, et une architecture MVC pour une maintenance facilitée.</p>
            `,
            demo: 'https://kabako.example.com',
            github: 'https://github.com/Asabi89'
        },
        // Autres projets...
    };
    
    // Ouvrir la modale de projet
    if (projectCards && projectModal && modalContent) {
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projectsData[projectId];
                
                if (project) {
                    modalContent.innerHTML = `
                        <img src="assets/images/projects/${projectId}.jpg" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-6">
                        <h4 class="text-xl font-heading font-bold mb-4 text-gray-800">${project.title}</h4>
                        ${project.description}
                    `;
                    
                    modalDemo.href = project.demo;
                    modalGithub.href = project.github;
                    
                    projectModal.classList.remove('hidden');
                    document.body.classList.add('overflow-hidden');
                    
                    // Animation d'ouverture de la modale
                    anime({
                        targets: modalContentContainer,
                        scale: [0.95, 1],
                        opacity: [0, 1],
                        duration: 300,
                        easing: 'easeOutQuad'
                    });
                }
            });
        });
    }
    
    // Fermer la modale de projet
    if (modalClose && projectModal) {
        modalClose.addEventListener('click', function() {
            // Animation de fermeture de la modale
            anime({
                targets: modalContentContainer,
                scale: [1, 0.95],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInQuad',
                complete: function() {
                    projectModal.classList.add('hidden');
                    document.body.classList.remove('overflow-hidden');
                }
            });
        });
        
        // Fermer la modale en cliquant en dehors du contenu
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                // Animation de fermeture de la modale
                anime({
                    targets: modalContentContainer,
                    scale: [1, 0.95],
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeInQuad',
                    complete: function() {
                        projectModal.classList.add('hidden');
                        document.body.classList.remove('overflow-hidden');
                    }
                });
            }
        });
    }
    
    // Bouton de retour en haut
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
                backToTopButton.classList.remove('opacity-100', 'visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Fermer le menu mobile si ouvert
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuster pour la hauteur de la navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="ph ph-circle-notch ph-spin mr-2"></i> Envoi en cours...';
            
            // Simuler un délai d'envoi
            setTimeout(function() {
                // Animation de succès
                anime({
                    targets: submitButton,
                    backgroundColor: ['#14b8a6', '#10b981'],
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
                
                submitButton.innerHTML = '<i class="ph ph-check-circle mr-2"></i> Message envoyé!';
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
                // Animer les champs du formulaire
                anime({
                    targets: '#contact-form .form-group',
                    translateY: [0, 10, 0],
                    opacity: [1, 0.5, 1],
                    delay: anime.stagger(100),
                    duration: 500,
                    easing: 'easeInOutQuad'
                });
                
                // Rétablir le bouton après un délai
                setTimeout(function() {
                    anime({
                        targets: submitButton,
                        backgroundColor: ['#10b981', '#14b8a6'],
                        duration: 300,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            submitButton.innerHTML = originalText;
                            submitButton.disabled = false;
                        }
                    });
                }, 3000);
            }, 2000);
        });
    }
    
    // Effet de parallaxe pour les éléments de décoration
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        // Appliquer l'effet de parallaxe aux éléments décoratifs
        document.querySelectorAll('.cube-3d, .sphere-3d, .torus-3d').forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.1;
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
    
    // Effet de hover sur les cartes de projet
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('img'),
                scale: 1.1,
                duration: 500,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('img'),
                scale: 1,
                duration: 500,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Effet de hover sur les objectifs
    document.querySelectorAll('#goals .bg-white').forEach(goal => {
        goal.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        goal.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});
