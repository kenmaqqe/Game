// src/Game.js
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Game = () => {
  const sceneRef = useRef(null);
  const [score, setScore] = useState(0);
  

  useEffect(() => {
    // Ініціалізація сцени
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Додавання основних елементів
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Анімаційний цикл
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      <div ref={sceneRef}></div>
      {/* Додайте компонент Scoreboard */}
    </div>
  );
};

export default Game;
