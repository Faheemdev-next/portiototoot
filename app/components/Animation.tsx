import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { BoxGeometry } from "three";
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
const Animation = () => {
  const model = useGLTF("/scene.gltf");
  // useFrame(() => {
  //   meshRef.current.rotation.z += 0.2;
  // });
  // useThree(({ camera, scene, gl }) => {
  //   camera.position.z = 2;
  // });
  return (
    <Center>
      <Environment preset="studio" />
      {/* <ambientLight intensity={0.4} />

      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
      {/* <ambientLight color={"blue"} intensity={20} /> */}

      {/* <directionalLight position={[-5, -2, -5]} intensity={0.6} /> */}
      <primitive
        object={model.scene}
        rotation={[0, Math.PI / 3, 0]}
        scale={2.5}
      />
      <OrbitControls />
    </Center>
  );
};

export default Animation;
