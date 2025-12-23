// src/components/ui/LiquidGlassButton.tsx
"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Mesh } from 'three';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const LiquidGlassButtonContent: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.7) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhysicalMaterial
        color="#FFFFFF"
        transmission={1.0}
        thickness={0.2}
        roughness={0.05}
        ior={1.3}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  );
};

const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({ children, onClick }) => {
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={onClick}
      onMouseEnter={() => document.body.style.cursor = 'pointer'}
      onMouseLeave={() => document.body.style.cursor = 'auto'}
    >
      <Canvas
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 2.5], fov: 50 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="sunset" />
        <LiquidGlassButtonContent />
      </Canvas>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          pointerEvents: 'none',
          textShadow: '0 0 10px rgba(0,0,0,0.5)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LiquidGlassButton;
