"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

// Pre-compute particle positions at module level — never changes, never re-renders
const PARTICLE_COUNT = 60;
const PARTICLE_POSITIONS = new Float32Array(
  Array.from({ length: PARTICLE_COUNT * 3 }, () => (Math.random() - 0.5) * 10)
);

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 80, 80]} scale={2.2}>
        <MeshDistortMaterial
          color="#63dcdc"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  return (
    <>
      {/* @ts-expect-error - Three.js JSX elements not in React types */}
      <points>
        {/* @ts-expect-error - Three.js JSX elements not in React types */}
        <bufferGeometry>
          {/* @ts-expect-error - Three.js JSX elements not in React types */}
          <bufferAttribute
            attach="attributes-position"
            args={[PARTICLE_POSITIONS, 3]}
          />
        {/* @ts-expect-error - Three.js JSX elements not in React types */}
        </bufferGeometry>
        {/* @ts-expect-error - Three.js JSX elements not in React types */}
        <pointsMaterial
          size={0.02}
          color="#63dcdc"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      {/* @ts-expect-error - Three.js JSX elements not in React types */}
      </points>
    </>
  );
}


export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      {/* @ts-expect-error - Three.js JSX elements not in React types */}
      <ambientLight intensity={0.3} />
      {/* @ts-expect-error - Three.js JSX elements not in React types */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#63dcdc" />
      {/* @ts-expect-error - Three.js JSX elements not in React types */}
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#a259ff" />
      <AnimatedSphere />
      <Particles />
    </Canvas>
  );
}
