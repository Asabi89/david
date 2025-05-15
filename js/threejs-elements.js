document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'élément Three.js existe
    const threeJsHero = document.getElementById('threejs-hero');
    
    if (threeJsHero && typeof THREE !== 'undefined') {
        // Initialiser la scène, la caméra et le renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, threeJsHero.clientWidth / threeJsHero.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        // Configurer le renderer
        renderer.setSize(threeJsHero.clientWidth, threeJsHero.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        threeJsHero.appendChild(renderer.domElement);
        
        // Créer des objets 3D
        const geometry = new THREE.TorusKnotGeometry(3, 1, 100, 16);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00a5a5,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        });
        
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);
        
        // Ajouter des lumières
        const light1 = new THREE.DirectionalLight(0xffffff, 1);
        light1.position.set(1, 1, 1);
        scene.add(light1);
        
        const light2 = new THREE.DirectionalLight(0x4a00e0, 1);
        light2.position.set(-1, -1, -1);
        scene.add(light2);
        
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);
        
        // Positionner la caméra
        camera.position.z = 10;
        
        // Fonction d'animation
        function animate() {
            requestAnimationFrame(animate);
            
            // Rotation de l'objet
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.01;
            
            // Rendu de la scène
            renderer.render(scene, camera);
        }
        
        // Démarrer l'animation
        animate();
        
        // Gérer le redimensionnement de la fenêtre
        window.addEventListener('resize', function() {
            camera.aspect = threeJsHero.clientWidth / threeJsHero.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(threeJsHero.clientWidth, threeJsHero.clientHeight);
        });
        
        // Ajouter une interaction à la souris
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        
        document.addEventListener('mousemove', function(event) {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });
        
        // Fonction d'animation avec interaction à la souris
        function animateWithMouse() {
            requestAnimationFrame(animateWithMouse);
            
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;
            
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.01;
            
            torusKnot.rotation.x += (targetY - torusKnot.rotation.x) * 0.05;
            torusKnot.rotation.y += (targetX - torusKnot.rotation.y) * 0.05;
            
            renderer.render(scene, camera);
        }
        
        // Utiliser l'animation avec interaction à la souris
        animateWithMouse();
        
        // Ajouter des particules en arrière-plan
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        
        const posArray = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 30;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x4a00e0,
            transparent: true,
            opacity: 0.8
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        // Animation des particules
        function animateParticles() {
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;
        }
        
        // Fonction d'animation complète
        function completeAnimation() {
            requestAnimationFrame(completeAnimation);
            
            animateParticles();
            
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;
            
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.01;
            
            torusKnot.rotation.x += (targetY - torusKnot.rotation.x) * 0.05;
            torusKnot.rotation.y += (targetX - torusKnot.rotation.y) * 0.05;
            
            renderer.render(scene, camera);
        }
        
        // Utiliser l'animation complète
        completeAnimation();
    }
});
