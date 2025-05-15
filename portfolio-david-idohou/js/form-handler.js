document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Validation du formulaire
        function validateForm() {
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    markInvalid(input, 'Ce champ est requis');
                    isValid = false;
                } else if (input.type === 'email' && input.value.trim() && !isValidEmail(input.value)) {
                    markInvalid(input, 'Veuillez entrer une adresse email valide');
                    isValid = false;
                } else {
                    markValid(input);
                }
            });
            
            return isValid;
        }
        
        function isValidEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        function markInvalid(input, message) {
            const formGroup = input.closest('.form-group');
            formGroup.classList.add('has-error');
            
            // Supprimer l'ancien message d'erreur s'il existe
            const existingError = formGroup.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Ajouter le nouveau message d'erreur
            const errorMessage = document.createElement('p');
            errorMessage.className = 'error-message text-red-500 text-sm mt-1';
            errorMessage.textContent = message;
            formGroup.appendChild(errorMessage);
            
            // Ajouter une classe d'erreur à l'input
            input.classList.add('border-red-500');
            input.classList.remove('border-gray-300', 'focus:border-primary-500');
            
            // Animation de l'erreur
            anime({
                targets: input,
                translateX: [0, -10, 10, -10, 10, 0],
                duration: 400,
                easing: 'easeInOutSine'
            });
        }
        
        function markValid(input) {
            const formGroup = input.closest('.form-group');
            formGroup.classList.remove('has-error');
            
            // Supprimer le message d'erreur s'il existe
            const existingError = formGroup.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }
            
            // Rétablir les classes normales
            input.classList.remove('border-red-500');
            input.classList.add('border-gray-300', 'focus:border-primary-500');
        }
        
        // Validation en temps réel
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('blur', function() {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    markInvalid(input, 'Ce champ est requis');
                } else if (input.type === 'email' && input.value.trim() && !isValidEmail(input.value)) {
                    markInvalid(input, 'Veuillez entrer une adresse email valide');
                } else {
                    markValid(input);
                }
            });
            
            input.addEventListener('input', function() {
                if (input.classList.contains('border-red-500')) {
                    if ((input.hasAttribute('required') && input.value.trim()) || 
                        (input.type === 'email' && isValidEmail(input.value))) {
                        markValid(input);
                    }
                }
            });
        });
        
        // Soumission du formulaire
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                // Si le formulaire n'est pas valide, arrêter la soumission
                return false;
            }
            
            // Simuler l'envoi du formulaire
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="ph ph-circle-notch ph-spin mr-2"></i> Envoi en cours...';
            
            // Collecter les données du formulaire
            const formData = new FormData(contactForm);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });
            
            // Simuler une requête AJAX
            setTimeout(function() {
                // Simuler une réponse réussie
                console.log('Données du formulaire:', formDataObject);
                
                // Animation de succès
                anime({
                    targets: submitButton,
                    backgroundColor: ['#14b8a6', '#10b981'],
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
                
                submitButton.innerHTML = '<i class="ph ph-check-circle mr-2"></i> Message envoyé!';
                
                // Afficher un message de succès
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message bg-green-50 text-green-800 p-4 rounded-lg mt-4 flex items-center';
                successMessage.innerHTML = `
                    <i class="ph ph-check-circle text-green-500 text-xl mr-2"></i>
                    <div>
                        <p class="font-medium">Message envoyé avec succès!</p>
                        <p class="text-sm">Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
                    </div>
                `;
                
                // Ajouter le message après le formulaire
                contactForm.parentNode.appendChild(successMessage);
                
                // Animer l'apparition du message
                anime({
                    targets: successMessage,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 500,
                    easing: 'easeOutQuad'
                });
                
                // Réinitialiser le formulaire
                contactForm.reset();
                
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
                            
                            // Faire disparaître le message de succès après un certain temps
                            setTimeout(function() {
                                anime({
                                    targets: successMessage,
                                    translateY: [0, 20],
                                    opacity: [1, 0],
                                    duration: 500,
                                    easing: 'easeInQuad',
                                    complete: function() {
                                        successMessage.remove();
                                    }
                                });
                            }, 5000);
                        }
                    });
                }, 3000);
            }, 2000);
        });
    }
    
    // Effet de focus sur les champs du formulaire
    const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    
    formInputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        const label = formGroup.querySelector('label');
        
        input.addEventListener('focus', function() {
            anime({
                targets: label,
                translateY: [-2, -5],
                scale: [1, 1.02],
                color: '#14b8a6',
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            anime({
                targets: this,
                borderColor: '#14b8a6',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        input.addEventListener('blur', function() {
            anime({
                targets: label,
                translateY: [-5, -2],
                scale: [1.02, 1],
                color: '#374151',
                duration: 300,
                easing: 'easeOutQuad'
            });
            
            if (!this.classList.contains('border-red-500')) {
                anime({
                    targets: this,
                    borderColor: '#d1d5db',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
});
