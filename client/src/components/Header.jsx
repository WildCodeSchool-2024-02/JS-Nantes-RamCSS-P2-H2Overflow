import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './styles/header_home.css'
// import './styles/header.css'

function Header() {

    useEffect(() => {
        const scene = new THREE.Scene();
        const ambientLight = new THREE.AmbientLight(0xffffff, 10); // effet de lumière sur la terre
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
        const axis = new THREE.Vector3(1, 1, 1); // Par exemple, l'axe des y
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-canvas') });
        const loader = new GLTFLoader();
        scene.background = new THREE.Color("rgba(255, 255, 255, 1)"); 
        scene.add( ambientLight, axis );
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        loader.load(
            '../src/assets/images/earth_3D.glb', // fichier_3D
            (glb) => {
                const earth = glb.scene;
                scene.add(earth);
                function animate(){
                    requestAnimationFrame(animate);
                    earth.rotation.y += 0.002; // Vitesse de rotation
                    renderer.render(scene, camera);
                }
                animate(); 
            },
            (err) => {
                console.error('Erreur de chargement du modèle', err);
            }
        );
        camera.position.z = 90; // Augmentez pour zoomer
        camera.fov = 0.26; // Diminuez pour dezoomer
        camera.updateProjectionMatrix();
    }, []); 

    return (
        <header>
            <h1>H²OVERFLOW</h1>
            <div className='earth-3D'>
                <canvas id="3d-canvas" />
            </div>
        </header>
    );
}
 
export default Header;