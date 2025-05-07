"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { Mesh, Material, BufferGeometry, Object3D } from "three";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

interface MaterialWithColor extends Material {
  color: {
    set: (color: string) => void;
  };
}

export function Model() {
  const mesh = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF("./spheron.glb");
  const { actions } = useAnimations(animations, mesh);
  const color = "#89cff0";

  useFrame(() => {
    {
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x += 0.02;
    }
  });

  useEffect(() => {
    if (actions && actions.MorphBake) {
      actions.MorphBake.timeScale = 0.5;
      actions.MorphBake.play();
    }
  }, [actions]);

  //   useEffect(() => {
  //     scene.traverse((child: Mesh) => {
  //       if (child.isMesh && child.material && "color" in child.material) {
  //         const material = child.material as MaterialWithColor;
  //         material.color.set(color);
  //       }
  //     });
  //   }, []);

  useEffect(() => {
    // Accept the general Object3D type here:
    scene.traverse((child: Object3D) => {
      // Narrow to Mesh at runtime:
      if ((child as Mesh).isMesh) {
        const meshChild = child as Mesh<BufferGeometry, Material | Material[]>;
        // Ensure material has color then cast to your interface
        if (meshChild.material && "color" in meshChild.material) {
          const mat = meshChild.material as MaterialWithColor;
          mat.color.set(color);
        }
      }
    });
  }, [scene, color]);

  return (
    <mesh ref={mesh}>
      <primitive object={scene} />
    </mesh>
  );
}

function ModelViewer() {
  return (
    <div className="self-center sm:w-[600px] sm:h-[400px] w-[380px] h-[400px]">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 30 }} // Adjust position for desired zoom level
      >
        {/* <Canvas className='h-[46rem] w-96'> */}
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="studio" />
        {/* <OrbitControls enableZoom={true} /> */}
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
