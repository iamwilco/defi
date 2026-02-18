"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <Sphere args={[1.8, 64, 64]}>
          <meshStandardMaterial
            color="#007BFF"
            emissive="#007BFF"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </Sphere>
        {/* Outer glow ring */}
        <mesh>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#007BFF" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.4, 0.015, 16, 100]} />
          <meshBasicMaterial color="#FFA500" transparent opacity={0.3} />
        </mesh>
        {/* Wireframe overlay */}
        <Sphere args={[1.82, 32, 32]}>
          <meshBasicMaterial wireframe color="#007BFF" transparent opacity={0.15} />
        </Sphere>
      </mesh>
    </Float>
  );
}

function EntityNodes() {
  const positions: [number, number, number][] = [
    [1.2, 1.4, 0.8],
    [-1.5, 0.6, 1.0],
    [0.3, -1.3, 1.5],
    [1.6, -0.5, -0.8],
    [-0.8, 1.0, -1.2],
  ];
  const colors = ["#007BFF", "#FFA500", "#00FF88", "#007BFF", "#FFA500"];

  return (
    <>
      {positions.map((pos, i) => (
        <Float key={i} speed={2 + i * 0.3} floatIntensity={0.3}>
          <mesh position={pos}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={colors[i]} />
          </mesh>
          <pointLight position={pos} color={colors[i]} intensity={0.3} distance={2} />
        </Float>
      ))}
    </>
  );
}

export function GlobeScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-3, -3, 2]} intensity={0.4} color="#007BFF" />
        <pointLight position={[3, 1, -2]} intensity={0.3} color="#FFA500" />
        <GlowingSphere />
        <EntityNodes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
