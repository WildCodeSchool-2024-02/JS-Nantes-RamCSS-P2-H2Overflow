import { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.current = new THREE.Scene();

    camera.current = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
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
      // controls.mouseButtons,
      camera.current,
      renderer.current.domElement
    );

    controls.current.mouseButtons = {
      LEFT: false,
      SCROLL: false,
      MIDDLE: THREE.MOUSE.ROTATE,
      RIGHT: THREE.MOUSE.ROTATE,
    };

    controls.current.enableZoom = false;

    loader.load("../src/assets/images/earth_3D.glb", (glb) => {
      const earth = glb.scene;
      scene.current.add(earth);
      setIsLoaded(true);

      function animate() {
        earth.rotation.y += 0.002;
        earth.rotation.x = 0.7;

        renderer.current.render(
          scene.current,
          camera.current,
          controls.mouseButtons
        );
        requestAnimationFrame(animate);
      }
      animate();
    });

    return () => {
      controls.current.dispose();
    };
  }, []);

  return (
    <header
      className={`header ${location.pathname === "/" ? "header-home" : ""}`}
    >
      <h1 className={`header ${location.pathname === "/" ? "h1-home" : "h1"}`}>
        H
        <div
          className={`header ${location.pathname === "/" ? "h2o" : "h2o-home"}`}
        >
          ²
        </div>
        OVERFLOW
      </h1>

      <NavLink>
        <canvas
          ref={canvas}
          id="3d-canvas"
          className={`header ${
            location.pathname === "/"
              ? "canvas-animate-home canvas-home earth-3D-home"
              : ""
          } earth-3D ${isLoaded ? "canvas-animate" : ""} 
          `}
        />
      </NavLink>
    </header>
  );
}

export default Header;
