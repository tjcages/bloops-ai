import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
  OrbitControls,
  Center,
  Text,
} from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  N8AO,
  ToneMapping,
} from "@react-three/postprocessing";

import Logo from "./_Logo";

const _ = () => {
  return (
    <Canvas
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 50], fov: 35 }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.4} />
      {/* <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      /> */}

      <Logo />
      <Text
        font="/fonts/TTHovesPro-Medium.ttf"
        fontSize={2.5}
        color="white"
        position={[0, 0, -2]}
      >
        THE FUTURE OF ADVANCED AI
        <meshBasicMaterial attach="material" color={"white"} />
      </Text>

      {/* <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        <TiltShift2 blur={0.1} />
      </EffectComposer> */}

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} intensity={2} />
        <N8AO aoRadius={0.5} intensity={2.5} />
        <ToneMapping
          adaptive={true}
          averageLuminance={0.1}
          middleGrey={0.5}
          maxLuminance={16}
        />
      </EffectComposer>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
      <OrbitControls />
    </Canvas>
  );
};

export default _;
