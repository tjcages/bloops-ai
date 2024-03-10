import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const _ = () => {
  const ref = useRef<THREE.Group | null>(null);
  const { nodes } = useGLTF("/models/scene-transformed.glb") as any;

  useFrame(() => {
    if (ref.current) ref.current.rotation.z += 0.01;
  });

  return (
    <group ref={ref} dispose={null} scale={0.01}>
      <mesh geometry={nodes.Shape_0.geometry} position={[0, 1000, 0]}>
        <MeshTransmissionMaterial
          backside
          roughness={0.2}
          thickness={100}
          backsideThickness={0}
          anisotropicBlur={0.2}
          chromaticAberration={1}
          distortion={0.5}
          temporalDistortion={0.5}
          distortionScale={1.25}
          resolution={400}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/scene-transformed.glb");

export default _;
