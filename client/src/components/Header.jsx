import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import correct
import "./styles/header.css";

function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

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

    renderer.current = new THREE.WebGLRenderer({
      canvas: canvas.current,
      alpha: true,
    });
    scene.current.add(ambientLight);
    scene.background = null;
    renderer.current.setSize(width, height);
    camera.current.position.z = 1000;
    camera.current.fov = 80;
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

  // const handleClick = () => {
  //   setIsAnimating(true); // Déclenche l'animation
  //   setTimeout(() => {
  //     // Redirige vers la nouvelle page après un délai
  //     window.location.href = "/";
  //   }, 3000); // Délai d'une seconde
  // };

  return (
    <header
      className={`header ${location.pathname === "/" ? "header-home" : ""}`}
    >
      <h1 className={`header ${location.pathname === "/" ? "h1-home" : ""}`}>
        H²OVERFLOW
      </h1>
      <NavLink>
        {/* onClick={location.pathname === "/" ? handleClick : null} */}
        <canvas
          ref={canvas}
          id="3d-canvas"
          className={`header ${location.pathname === "/" ? "canvas-animate-home canvas-home earth-3D-home" : ""} earth-3D ${isLoaded ? "canvas-animate" : ""}`}
        />
      </NavLink>
    </header>
  );
}

export default Header;
