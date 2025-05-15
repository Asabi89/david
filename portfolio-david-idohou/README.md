<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>David Idohou | Développeur Full Stack & Data Scientist</title>
    <meta name="description" content="Portfolio de David Idohou, développeur Full Stack et Data Scientist spécialisé en IA et bioinformatique">
    
    <!-- Tailwind CSS 3 -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Anime.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    
    <!-- Three.js pour les icônes 3D -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    
    <!-- Configuration Tailwind personnalisée -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            200: '#99f6e4',
                            300: '#5eead4',
                            400: '#2dd4bf',
                            500: '#14b8a6',
                            600: '#0d9488',
                            700: '#0f766e',
                            800: '#115e59',
                            900: '#134e4a',
                            950: '#042f2e',
                        },
                        secondary: {
                            50: '#fdf4ff',
                            100: '#fae8ff',
                            200: '#f5d0fe',
                            300: '#f0abfc',
                            400: '#e879f9',
                            500: '#d946ef',
                            600: '#c026d3',
                            700: '#a21caf',
                            800: '#86198f',
                            900: '#701a75',
                            950: '#4a044e',
                        },
                        accent: {
                            50: '#fffbeb',
                            100: '#fef3c7',
                            200: '#fde68a',
                            300: '#fcd34d',
                            400: '#fbbf24',
                            500: '#f59e0b',
                            600: '#d97706',
                            700: '#b45309',
                            800: '#92400e',
                            900: '#78350f',
                            950: '#451a03',
                        },
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Outfit', 'sans-serif'],
                    },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'bounce-slow': 'bounce 3s infinite',
                        'spin-slow': 'spin 8s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                },
            },
        }
    </script>
    
    <!-- Polices Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Phosphor Icons (pour des icônes modernes) -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <!-- Styles personnalisés -->
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/custom.css">
</head>

    
    <style>
        /* Styles personnalisés supplémentaires */
        .skill-bar {
            height: 10px;
            @apply bg-gray-200 rounded-full overflow-hidden;
        }
        
        .skill-level {
            height: 100%;
            @apply bg-gradient-to-r from-primary-500 to-secondary-500;
            transition: width 1.5s ease;
        }
        
        .timeline-container::before {
            content: '';
            @apply absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 -translate-x-1/2 rounded;
        }
        
        @media (max-width: 768px) {
            .timeline-container::before {
                @apply left-6;
            }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">
    <!-- Loader -->
    <div id="loader" class="fixed inset-0 bg-white flex justify-center items-center z-50 transition-opacity duration-500">
        <div class="text-center">
            <div class="w-16 h-16 border-4 border-t-primary-500 border-r-secondary-500 border-b-accent-500 border-l-gray-200 rounded-full animate-spin mb-4"></div>
            <h2 class="text-2xl font-heading font-bold text-gray-800">Chargement...</h2>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/95 shadow-md z-40 transition-all duration-300">
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <a href="#home" class="text-2xl font-heading font-bold text-primary-600">David<span class="text-secondary-600">Idohou</span></a>
                
                <!-- Menu pour desktop -->
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="font-medium hover:text-primary-600 transition-colors">Accueil</a>
                    <a href="#about" class="font-medium hover:text-primary-600 transition-colors">À propos</a>
                    <a href="#education" class="font-medium hover:text-primary-600 transition-colors">Parcours</a>
                    <a href="#skills" class="font-medium hover:text-primary-600 transition-colors">Compétences</a>
                    <a href="#projects" class="font-medium hover:text-primary-600 transition-colors">Projets</a>
                    <a href="#goals" class="font-medium hover:text-primary-600 transition-colors">Objectifs</a>
                    <a href="#contact" class="font-medium hover:text-primary-600 transition-colors">Contact</a>
                </div>
                
                <!-- Bouton menu mobile -->
                <button id="mobile-menu-button" class="md:hidden text-gray-800 focus:outline-none">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
            
            <!-- Menu mobile -->
            <div id="mobile-menu" class="md:hidden hidden mt-4 pb-4">
                <div class="flex flex-col space-y-4">
                    <a href="#home" class="font-medium hover:text-primary-600 transition-colors">Accueil</a>
                    <a href="#about" class="font-medium hover:text-primary-600 transition-colors">À propos</a>
                    <a href="#education" class="font-medium hover:text-primary-600 transition-colors">Parcours</a>
                    <a href="#skills" class="font-medium hover:text-primary-600 transition-colors">Compétences</a>
                    <a href="#projects" class="font-medium hover:text-primary-600 transition-colors">Projets</a>
                    <a href="#goals" class="font-medium hover:text-primary-600 transition-colors">Objectifs</a>
                    <a href="#contact" class="font-medium hover:text-primary-600 transition-colors">Contact</a>
                </div>
            </div>
        </div>
    </nav>

   <!-- Section Parcours -->
<section id="education" class="py-20 bg-gray-50 relative overflow-hidden">
    <!-- Éléments de décoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div class="absolute bottom-20 left-10 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative" data-anime="fadeInUp">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Mon parcours</span>
            <span class="absolute bottom-0 left-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 -translate-x-1/2 mt-4"></span>
        </h2>
        
        <div class="timeline-container relative max-w-4xl mx-auto">
            <!-- Item 1 -->
            <div class="timeline-item mb-16 md:w-full" data-anime="fadeInUp" data-anime-delay="100">
                <div class="md:w-1/2 md:pr-8 md:text-right md:ml-auto">
                    <div class="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div class="absolute top-0 md:left-1/2 md:-translate-x-1/2 left-6 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full font-medium">
                            <i class="ph ph-briefcase mr-1"></i>2022 - Présent
                        </div>
                        <h3 class="text-xl font-heading font-bold mb-2 text-gray-800">Data Scientist Senior</h3>
                        <p class="text-primary-600 font-medium mb-3">TechInnovate Solutions</p>
                        <p class="text-gray-600">
                            Développement de modèles d'IA pour l'analyse prédictive dans le secteur de la santé. Conception d'algorithmes de machine learning pour l'analyse de données génomiques.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Item 2 -->
            <div class="timeline-item mb-16 md:w-full" data-anime="fadeInUp" data-anime-delay="200">
                <div class="md:w-1/2 md:pl-8">
                    <div class="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div class="absolute top-0 md:left-1/2 md:-translate-x-1/2 left-6 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full font-medium">
                            <i class="ph ph-code mr-1"></i>2019 - 2022
                        </div>
                        <h3 class="text-xl font-heading font-bold mb-2 text-gray-800">Développeur Full Stack</h3>
                        <p class="text-primary-600 font-medium mb-3">WebSphere Technologies</p>
                        <p class="text-gray-600">
                            Développement d'applications web et mobiles pour divers clients. Utilisation de React, Node.js et MongoDB pour créer des solutions évolutives et performantes.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Item 3 -->
            <div class="timeline-item mb-16 md:w-full" data-anime="fadeInUp" data-anime-delay="300">
                <div class="md:w-1/2 md:pr-8 md:text-right md:ml-auto">
                    <div class="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div class="absolute top-0 md:left-1/2 md:-translate-x-1/2 left-6 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full font-medium">
                            <i class="ph ph-graduation-cap mr-1"></i>2017 - 2019
                        </div>
                        <h3 class="text-xl font-heading font-bold mb-2 text-gray-800">Master en Bioinformatique</h3>
                        <p class="text-primary-600 font-medium mb-3">Université de Montréal</p>
                        <p class="text-gray-600">
                            Spécialisation en analyse de données génomiques et développement d'outils computationnels pour la recherche en biologie.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Item 4 -->
            <div class="timeline-item mb-16 md:w-full" data-anime="fadeInUp" data-anime-delay="400">
                <div class="md:w-1/2 md:pl-8">
                    <div class="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div class="absolute top-0 md:left-1/2 md:-translate-x-1/2 left-6 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full font-medium">
                            <i class="ph ph-student mr-1"></i>2013 - 2017
                        </div>
                        <h3 class="text-xl font-heading font-bold mb-2 text-gray-800">Licence en Informatique</h3>
                        <p class="text-primary-600 font-medium mb-3">Université de Cotonou</p>
                        <p class="text-gray-600">
                            Formation en programmation, algorithmes, structures de données et développement logiciel. Projet de fin d'études sur les systèmes de recommandation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Section Projets -->
<section id="projects" class="py-20 bg-white relative overflow-hidden">
    <!-- Éléments de décoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-40 left-20 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div class="absolute bottom-40 right-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative" data-anime="fadeInUp">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Mes projets</span>
            <span class="absolute bottom-0 left-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 -translate-x-1/2 mt-4"></span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Projet 1 -->
            <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" data-project="kabako" data-anime="fadeInUp" data-anime-delay="100">
                <div class="relative group">
                    <img src="assets/images/projects/kabako.jpg" alt="Kabako - Application Kanban" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div class="p-4 w-full">
                            <span class="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                <i class="ph ph-globe mr-1"></i>Web App
                            </span>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-heading font-bold mb-2 text-gray-800">Kabako - Application Kanban</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">Une application de gestion de projets basée sur la méthode Kanban, permettant aux équipes de visualiser leur flux de travail.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">JavaScript</span>
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">Laravel</span>
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">MySQL</span>
                    </div>
                    <button class="view-details w-full py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-md transition-all duration-300 flex items-center justify-center">
                        <i class="ph ph-arrow-right mr-2"></i>Voir les détails
                    </button>
                </div>
            </div>
            
            <!-- Projet 2 -->
            <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" data-project="kollopay" data-anime="fadeInUp" data-anime-delay="200">
                <div class="relative group">
                    <img src="assets/images/projects/kollopay.jpg" alt="KolloPay - Application bancaire" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div class="p-4 w-full">
                            <span class="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                <i class="ph ph-bank mr-1"></i>FinTech
                            </span>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-heading font-bold mb-2 text-gray-800">KolloPay - Application bancaire</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">Une application de banque en ligne sécurisée permettant aux utilisateurs de gérer leurs comptes et effectuer des transactions.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">PHP</span>
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">MySQL</span>
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">JavaScript</span>
                    </div>
                    <button class="view-details w-full py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-md transition-all duration-300 flex items-center justify-center">
                        <i class="ph ph-arrow-right mr-2"></i>Voir les détails
                    </button>
                </div>
            </div>
            
            <!-- Projet 3 -->
            <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" data-project="ecole" data-anime="fadeInUp" data-anime-delay="300">
                <div class="relative group">
                    <img src="assets/images/projects/ecole.jpg" alt="Gestion d'école" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div class="p-4 w-full">
                            <span class="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                <i class="ph ph-student mr-1"></i>EdTech
                            </span>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-heading font-bold mb-2 text-gray-800">Gestion d'école</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">Une plateforme complète pour gérer les établissements universitaires, incluant la gestion des étudiants et des cours.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">Django</span>
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">PostgreSQL</span>
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs">Bootstrap</span>
                    </div>
                    <button class="view-details w-full py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-md transition-all duration-300 flex items-center justify-center">
                        <i class="ph ph-arrow-right mr-2"></i>Voir les détails
                    </button>
                </div>
            </div>
            
            <!-- Autres projets... -->
        </div>
        
        <!-- Bouton "Voir plus de projets" -->
        <div class="text-center mt-12">
            <a href="#" class="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg shadow border border-primary-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <i class="ph ph-folder-open mr-2"></i>Voir plus de projets
                <i class="ph ph-arrow-right ml-2"></i>
            </a>
        </div>
    </div>
</section>

<!-- Modale de projet -->
<div id="project-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden backdrop-blur-sm transition-all duration-300">
    <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4 transform transition-all duration-300 scale-95 opacity-0" id="modal-content-container">
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-heading font-bold text-gray-800">Détails du projet</h3>
                <button id="modal-close" class="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <i class="ph ph-x text-xl"></i>
                </button>
            </div>
            <div id="modal-content"></div>
            <div class="flex justify-center mt-8 space-x-4">
                <a id="modal-demo" href="#" target="_blank" class="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <i class="ph ph-globe mr-2"></i> Voir la démo
                </a>
                <a id="modal-github" href="#" target="_blank" class="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center">
                    <i class="ph ph-github-logo mr-2"></i> Code source
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Section Objectifs -->
<section id="goals" class="py-20 bg-gray-50 relative overflow-hidden">
    <!-- Éléments de décoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-20 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative" data-anime="fadeInUp">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Mes objectifs</span>
            <span class="absolute bottom-0 left-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 -translate-x-1/2 mt-4"></span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Objectif 1 -->
            <div class="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2" data-anime="fadeInUp" data-anime-delay="100">
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i class="ph ph-brain text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-heading font-bold text-center mb-4 text-gray-800">Innovation en IA</h3>
                <p class="text-gray-600 text-center goal-text">
                    Développer des solutions d'intelligence artificielle innovantes pour résoudre des problèmes complexes dans le domaine de la santé et de la bioinformatique.
                </p>
            </div>
            
            <!-- Objectif 2 -->
            <div class="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2" data-anime="fadeInUp" data-anime-delay="200">
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i class="ph ph-users-three text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-heading font-bold text-center mb-4 text-gray-800">Collaboration internationale</h3>
                <p class="text-gray-600 text-center goal-text">
                    Collaborer avec des équipes internationales sur des projets à fort impact social, en partageant mes connaissances et en apprenant des autres cultures.
                </p>
            </div>
            
            <!-- Objectif 3 -->
            <div class="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2" data-anime="fadeInUp" data-anime-delay="300">
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i class="ph ph-graduation-cap text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-heading font-bold text-center mb-4 text-gray-800">Formation continue</h3>
                <p class="text-gray-600 text-center goal-text">
                    Poursuivre mon apprentissage continu dans les technologies émergentes et partager mes connaissances à travers des formations et des conférences.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Section Contact -->
<section id="contact" class="py-20 bg-white relative overflow-hidden">
    <!-- Éléments de décoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-40 right-10 w-80 h-80 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div class="absolute bottom-40 left-10 w-80 h-80 bg-secondary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative" data-anime="fadeInUp">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Me contacter</span>
            <span class="absolute bottom-0 left-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 -translate-x-1/2 mt-4"></span>
        </h2>
        
        <div class="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            <!-- Informations de contact -->
            <div class="md:w-1/2 bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl" data-anime="fadeInLeft">
                <h3 class="text-2xl font-heading font-bold mb-6 text-gray-800">Informations de contact</h3>
                
                <div class="space-y-6 contact-info">
                    <div class="flex items-start" data-anime="fadeInUp" data-anime-delay="100">
                        <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <i class="ph ph-envelope text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-gray-800 mb-1">Email</h4>
                            <a href="mailto:contact@davididohou.com" class="text-primary-600 hover:text-primary-700 transition-colors">contact@davididohou.com</a>
                        </div>
                    </div>
                    
                    <div class="flex items-start" data-anime="fadeInUp" data-anime-delay="200">
                        <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <i class="ph ph-phone text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-gray-800 mb-1">Téléphone</h4>
                            <a href="tel:+22967000000" class="text-primary-600 hover:text-primary-700 transition-colors">+229 67 00 00 00</a>
                        </div>
                    </div>
                    
                    <div class="flex items-start" data-anime="fadeInUp" data-anime-delay="300">
                        <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <i class="ph ph-map-pin text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-lg font-medium text-gray-800 mb-1">Localisation</h4>
                            <p class="text-gray-600">Cotonou, Bénin</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-10">
                    <h4 class="text-lg font-medium text-gray-800 mb-4">Réseaux sociaux</h4>
                    <div class="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-anime="fadeInUp" data-anime-delay="100">
                            <i class="ph ph-linkedin-logo"></i>
                        </a>
                        <a href="https://github.com" target="_blank" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-anime="fadeInUp" data-anime-delay="200">
                            <i class="ph ph-github-logo"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-anime="fadeInUp" data-anime-delay="300">
                            <i class="ph ph-twitter-logo"></i>
                        </a>
                        <a href="https://medium.com" target="_blank" class="social-link w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-anime="fadeInUp" data-anime-delay="400">
                            <i class="ph ph-medium-logo"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Formulaire de contact -->
            <div class="md:w-1/2 bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl" data-anime="fadeInRight">
                <h3 class="text-2xl font-heading font-bold mb-6 text-gray-800">Envoyez-moi un message</h3>
                
                <form id="contact-form" class="space-y-6">
                    <div class="form-group" data-anime="fadeInUp" data-anime-delay="100">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="ph ph-user text-gray-400"></i>
                            </div>
                            <input type="text" id="name" name="name" class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" required>
                        </div>
                    </div>
                    
                    <div class="form-group" data-anime="fadeInUp" data-anime-delay="200">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="ph ph-envelope text-gray-400"></i>
                            </div>
                            <input type="email" id="email" name="email" class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" required>
                        </div>
                    </div>
                    
                    <div class="form-group" data-anime="fadeInUp" data-anime-delay="300">
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="ph ph-chat-text text-gray-400"></i>
                            </div>
                            <input type="text" id="subject" name="subject" class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" required>
                        </div>
                    </div>
                    
                    <div class="form-group" data-anime="fadeInUp" data-anime-delay="400">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <div class="relative">
                            <div class="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                                <i class="ph ph-chat-dots text-gray-400"></i>
                            </div>
                            <textarea id="message" name="message" rows="5" class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" required></textarea>
                        </div>
                    </div>
                    
                    <button type="submit" class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center" data-anime="fadeInUp" data-anime-delay="500">
                        <i class="ph ph-paper-plane-right mr-2"></i>Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0" data-anime="fadeInUp">
                <h2 class="text-2xl font-heading font-bold mb-2">David<span class="text-primary-400">Idohou</span></h2>
                <p class="text-gray-400">Développeur Full Stack & Data Scientist</p>
            </div>
            
            <div class="flex space-x-6" data-anime="fadeInUp" data-anime-delay="100">
                <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    <i class="ph ph-linkedin-logo text-xl"></i>
                </a>
                <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    <i class="ph ph-github-logo text-xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    <i class="ph ph-twitter-logo text-xl"></i>
                </a>
                <a href="https://medium.com" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    <i class="ph ph-medium-logo text-xl"></i>
                </a>
            </div>
        </div>
        
        <hr class="border-gray-800 my-8">
        
        <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 mb-4 md:mb-0" data-anime="fadeInUp">&copy; 2023 David Idohou. Tous droits réservés.</p>
            <div class="flex space-x-6" data-anime="fadeInUp" data-anime-delay="100">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
        </div>
    </div>
</footer>

<!-- Bouton de retour en haut -->
<button id="back-to-top" class="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center shadow-lg opacity-0 invisible transition-all duration-300 z-30 hover:-translate-y-1">
    <i class="ph ph-arrow-up"></i>
</button>

<!-- Scripts -->
<script src="js/animations.js"></script>
<script src="js/main.js"></script>
<script src="js/3d-elements.js"></script>
<script src="js/form-handler.js"></script>
</body>
</html>
























    <!-- Section À propos -->
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-center mb-16 relative" data-aos="fade-up">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">À propos de moi</span>
                <span class="absolute bottom-0 left-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 -translate-x-1/2 mt-4"></span>
            </h2>
            
            <div class="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto" data-aos="fade-up">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/3 mb-8 md:mb-0">
                        <img src="assets/images/profile.jpg" alt="David Idohou" class="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mx-auto border-4 border-primary-200">
                    </div>
                    <div class="md:w-2/3 md:pl-8">
                        <p class="text-lg text-primary-600 font-medium mb-4">
                            Développeur Full Stack & Data Scientist
                        </p>
                        <p class="text-gray-700 mb-4">
                            Je suis David Idohou, un développeur passionné par la création de solutions technologiques innovantes. Avec une expertise en développement web full stack et en data science, je combine des compétences techniques solides avec une approche créative pour résoudre des problèmes complexes.
                        </p>
                        <p class="text-gray-700 mb-6">
                            Mon parcours m'a permis d'acquérir une expérience significative dans la conception et le développement d'applications web, l'analyse de données et l'implémentation de modèles d'intelligence artificielle. Je suis particulièrement intéressé par les applications de la technologie dans le domaine de la bioinformatique et de la santé.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">JavaScript</span>
                            <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Python</span>
                            <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">React</span>
                            <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Node.js</span>
                            <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Machine Learning</span>
                            <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Bioinformatique</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>














    <!-- Section Hero -->
    <section id="home" class="min-h-screen pt-24 pb-16 flex items-center hero-bg-pattern relative overflow-hidden">
        <!-- Éléments de décoration -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div class="absolute top-1/4 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
            <div class="absolute bottom-1/4 left-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-12 md:mb-0">
                    <div class="space-y-6 md:pr-12">
                        <div>
                            <span class="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium inline-block mb-4">
                                <i class="fas fa-code mr-2"></i>Développeur Web
                            </span>
                        </div>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                            Bonjour, je suis <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">David Idohou</span>
                        </h1>
                        <div class="text-xl md:text-2xl font-medium text-gray-600 mt-4">
                            <span id="typing-text">Développeur web passionné par l'IA et le cloud</span>
                            <span class="typing-cursor"></span>
                        </div>
                        <p class="text-gray-600 text-lg">
                            Je suis animé par la volonté de créer des solutions numériques utiles, performantes et orientées utilisateur. J'aime combiner le design fonctionnel avec la puissance de la technologie.
                        </p>
                        <div class="flex flex-wrap gap-4 pt-4">
                            <a href="#projects" class="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                Voir mes projets
                            </a>
                            <a href="#contact" class="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow border border-gray-200 hover:shadow-lg transition-shadow">
                                Me contacter
                            </a>
                        </div>
                        <div class="flex space-x-4 pt-6">
                            <a href="https://linkedin.com" target="_blank" class="text-gray-600 hover:text-primary-600 transition-colors">
                                <i class="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a href="https://github.com" target="_blank" class="text-gray-600 hover:text-primary-600 transition-colors">
                                <i class="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" class="text-gray-600 hover:text-primary-600 transition-colors">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="https://medium.com" target="_blank" class="text-gray-600 hover:text-primary-600 transition-colors">
                                <i class="fab fa-medium-m text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="relative">
                        <div class="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-20"></div>
                        <img src="assets/images/profile.jpg" alt="David Idohou" class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-xl relative z-10 animate-float">
                        <div class="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg z-20">
                            <div class="text-primary-500 animate-pulse">
                                <i class="fas fa-code text-xl"></i>
                            </div>
                        </div>
                        <div class="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg z-20">
                            <div class="text-secondary-500 animate-pulse">
                                <i class="fas fa-brain text-xl"></i>
                            </div>
                        </div>
                        <div class="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg z-20">
                            <div class="text-accent-500 animate-bounce-slow">
                                <i class="fas fa-cloud text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Badges de technologies -->
            <div class="mt-16 flex flex-wrap justify-center gap-4 opacity-80">
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-html5 text-orange-500 mr-2"></i>
                    <span class="text-sm font-medium">HTML5</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-css3-alt text-blue-500 mr-2"></i>
                    <span class="text-sm font-medium">CSS3</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-js text-yellow-500 mr-2"></i>
                    <span class="text-sm font-medium">JavaScript</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-react text-blue-400 mr-2"></i>
                    <span class="text-sm font-medium">React</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-node-js text-green-600 mr-2"></i>
                    <span class="text-sm font-medium">Node.js</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-python text-blue-600 mr-2"></i>
                    <span class="text-sm font-medium">Python</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fas fa-database text-gray-600 mr-2"></i>
                    <span class="text-sm font-medium">SQL</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-aws text-orange-400 mr-2"></i>
                    <span class="text-sm font-medium">AWS</span>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <i class="fab fa-microsoft text-blue-500 mr-2"></i>
                    <span class="text-sm font-medium">Azure</span>
                </div>
            </div>
            
            <!-- Indicateur de défilement -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
                <a href="#about" class="flex flex-col items-center">
                    <span class="text-sm mb-2">Défiler pour découvrir</span>
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    </section>