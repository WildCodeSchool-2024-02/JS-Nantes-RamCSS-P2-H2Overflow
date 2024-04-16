import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import correct
import "./styles/header_home.css";

function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  const canvas = useRef();
  const camera = useRef();
  const scene = useRef();
  const renderer = useRef();
  const controls = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    const width = window.innerWidth * 0.7;
    const height = window.innerHeight * 0.7;
    const ambientLight = new THREE.AmbientLight(0xffffff, 7);
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer.current = new THREE.WebGLRenderer({ canvas: canvas.current });
    scene.current.background = new THREE.Color("rgba(255, 255, 255, 1)");
    scene.current.add(ambientLight);
    renderer.current.setSize(width, height);
    camera.current.position.z = 1000;
    camera.current.fov = 100;
    camera.current.updateProjectionMatrix();
    controls.current = new OrbitControls(
      camera.current,
      renderer.current.domElement
    );

    loader.load("../src/assets/images/earth_3D.glb", (glb) => {
      const earth = glb.scene;
      scene.current.add(earth);
      setIsLoaded(true);

      function animate() {
        earth.rotation.y += 0.002;
        renderer.current.render(scene.current, camera.current);
        requestAnimationFrame(animate);
      }
      animate();
    });

    return () => {
      controls.current.dispose();
    };
  }, []);

  return (
    <header>
      <h1>H²OVERFLOW</h1>
      <div>
        <canvas
          ref={canvas}
          id="3d-canvas"
          className={`earth-3D ${isLoaded ? "canvas-animate" : ""}`}
        />
      </div>
    </header>
  );
}

export default Header;
