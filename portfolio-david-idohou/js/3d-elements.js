document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des éléments 3D avec Three.js
    
    // Conteneur pour l'animation 3D du hero
    const container = document.getElementById('hero-3d-container');
    
    if (!container) return;
    
    // Configuration de base
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Ajuster la taille du renderer lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
    
    // Création des objets 3D
    
    // Sphère
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x14b8a6,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // Tore
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
        color: 0xd946ef,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(2, 0, 0);
    scene.add(torus);
    
    // Cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0xf59e0b,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-2, 0, 0);
    scene.add(cube);
    
    // Octaèdre
    const octahedronGeometry = new THREE.OctahedronGeometry(1);
    const octahedronMaterial = new THREE.MeshPhongMaterial({
        color: 0x3b82f6,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true
    });
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
    octahedron.position.set(0, 2, 0);
    scene.add(octahedron);
    
    // Éclairage
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);
    
    // Position de la caméra
    camera.position.z = 6;
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotation des objets
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
        
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        
        cube.rotation.x += 0.01;
        cube.rotation.z += 0.01;
        
        octahedron.rotation.x += 0.01;
        octahedron.rotation.y += 0.01;
        
        // Effet de flottement
        const time = Date.now() * 0.001; // Temps en secondes
        
        sphere.position.y = Math.sin(time * 0.5) * 0.3;
        torus.position.y = Math.sin(time * 0.7) * 0.3;
        cube.position.y = Math.sin(time * 0.3) * 0.3;
        octahedron.position.y = Math.sin(time * 0.6) * 0.3 + 2;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Interaction avec la souris
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = container.clientWidth / 2;
    const windowHalfY = container.clientHeight / 2;
    
    document.addEventListener('mousemove', function(event) {
        mouseX = (event.clientX - windowHalfX) / 100;
        mouseY = (event.clientY - windowHalfY) / 100;
    });
    
    function updateCameraPosition() {
        targetX = mouseX * 0.3;
        targetY = mouseY * 0.3;
        
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (-targetY - camera.position.y) * 0.05;
        
        camera.lookAt(scene.position);
    }
    
    // Ajouter la mise à jour de la caméra à l'animation
    const originalAnimate = animate;
    animate = function() {
        updateCameraPosition();
        originalAnimate();
    };
    
    // Créer des éléments 3D décoratifs pour le reste de la page
    function createDecorative3DElements() {
        // Créer des éléments 3D pour les sections
        document.querySelectorAll('.cube-3d, .sphere-3d, .torus-3d').forEach(element => {
            const miniContainer = document.createElement('div');
            miniContainer.style.width = '100%';
            miniContainer.style.height = '100%';
            element.appendChild(miniContainer);
            
            const miniScene = new THREE.Scene();
            const miniCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const miniRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            
            miniRenderer.setSize(100, 100);
            miniRenderer.setClearColor(0x000000, 0);
            miniContainer.appendChild(miniRenderer.domElement);
            
            let geometry, material, mesh;
            
            if (element.classList.contains('cube-3d')) {
                geometry = new THREE.BoxGeometry(1, 1, 1);
                material = new THREE.MeshPhongMaterial({
                    color: 0x14b8a6,
                    emissive: 0x072534,
                    side: THREE.DoubleSide,
                    flatShading: true
                });
            } else if (element.classList.contains('sphere-3d')) {
                geometry = new THREE.SphereGeometry(1, 32, 32);
                material = new THREE.MeshPhongMaterial({
                    color: 0xd946ef,
                    emissive: 0x072534,
                    side: THREE.DoubleSide,
                    flatShading: true
                });
            } else if (element.classList.contains('torus-3d')) {
                geometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
                material = new THREE.MeshPhongMaterial({
                    color: 0xf59e0b,
                    emissive: 0x072534,
                    side: THREE.DoubleSide,
                    flatShading: true
                });
            }
            
            mesh = new THREE.Mesh(geometry, material);
            miniScene.add(mesh);
            
            const light = new THREE.AmbientLight(0xffffff, 0.5);
            miniScene.add(light);
            
            const pointLight = new THREE.PointLight(0xffffff, 1);
            pointLight.position.set(5, 5, 5);
            miniScene.add(pointLight);
            
            miniCamera.position.z = 3;
            
            function animateMini() {
                requestAnimationFrame(animateMini);
                
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
                
                miniRenderer.render(miniScene, miniCamera);
            }
            
            animateMini();
        });
    }
    
    createDecorative3DElements();
});
