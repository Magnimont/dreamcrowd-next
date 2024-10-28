import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  onLoad: () => void;
}

function Model({ onLoad }: ModelProps): JSX.Element {
  const { scene } = useGLTF("/cube_and_balls.gltf");
  
  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const meshChild = child as THREE.Mesh;
        meshChild.castShadow = true;
        meshChild.receiveShadow = true;
      }
    });
    onLoad();
  }, [scene, onLoad]);

  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
}

const Scene: React.FC<{ onLoad: () => void }> = ({ onLoad }) => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <spotLight
        position={[-10, 10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      
      <Model onLoad={onLoad} />
      
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default Scene;