import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Detection for mobile
    const isMobile = width < 768;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = isMobile ? 30 : 25;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Create soft ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x2563eb, 1.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create elegant translucent floating particles
    const particleCount = isMobile ? 300 : 900;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialY = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Spread particles across a wide 3D space
      positions[i * 3] = (Math.random() - 0.5) * (isMobile ? 35 : 50); // X
      const yVal = (Math.random() - 0.5) * (isMobile ? 25 : 35);
      positions[i * 3 + 1] = yVal; // Y
      initialY[i] = yVal;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Z

      speeds[i] = 0.02 + Math.random() * 0.05;
      phases[i] = Math.random() * Math.PI * 2;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Custom circular texture for particles
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(37, 99, 235, 1)");
      gradient.addColorStop(0.3, "rgba(14, 165, 233, 0.6)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.35 : 0.6,
      map: particleTexture,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Create subtle floating abstract energy geometry (Torus Knot Wireframe representing engineering fluidity)
    const knotGeo = new THREE.TorusKnotGeometry(6, 1.8, 120, 12, 3, 4);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: isMobile ? 0.04 : 0.08,
    });
    const energyKnot = new THREE.Mesh(knotGeo, knotMat);
    energyKnot.position.set(isMobile ? 0 : 8, isMobile ? -2 : 0, 0);
    scene.add(energyKnot);

    // Additional outer halo ring to add depth
    const ringGeo = new THREE.RingGeometry(10, 10.2, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: isMobile ? 0.06 : 0.12,
      side: THREE.DoubleSide,
    });
    const haloRing = new THREE.Mesh(ringGeo, ringMat);
    haloRing.position.copy(energyKnot.position);
    haloRing.rotation.x = Math.PI / 3;
    scene.add(haloRing);

    // Handle mouse movement for subtle depth parallax
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handling using ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        width = newWidth;
        height = newHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smoothly interpolate mouse positions for easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Gently sway camera / scene based on mouse
      if (!isMobile) {
        scene.rotation.y = mouseRef.current.x * 0.15;
        scene.rotation.x = -mouseRef.current.y * 0.1;
      }

      // Animate energy knot (rotate and breathe)
      energyKnot.rotation.x = elapsedTime * 0.12;
      energyKnot.rotation.y = elapsedTime * 0.08;
      const scaleFactor = 1 + Math.sin(elapsedTime * 0.5) * 0.04;
      energyKnot.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Animate halo ring in counter-rotation
      haloRing.rotation.z = -elapsedTime * 0.05;

      // Animate flowing particles (simulate thermal current/flow upward)
      const positionsAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      if (positionsAttr) {
        const arr = positionsAttr.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          // Update Y position (particles drift upward, then loop back)
          initialY[i] += speeds[i] * 0.4;
          if (initialY[i] > (isMobile ? 15 : 20)) {
            initialY[i] = isMobile ? -15 : -20;
          }

          // Add subtle wave movement using sine/cosine functions based on elapsed time
          const waveX = Math.sin(elapsedTime + phases[i]) * 0.3;
          const waveZ = Math.cos(elapsedTime + phases[i]) * 0.3;

          arr[i * 3 + 1] = initialY[i]; // Y
          arr[i * 3] += waveX * 0.02; // Drifts slightly in X
          arr[i * 3 + 2] += waveZ * 0.02; // Drifts slightly in Z
        }
        positionsAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up resources on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose of ThreeJS objects to prevent memory leaks
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      knotGeo.dispose();
      knotMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      id="three-canvas-container"
    />
  );
}
