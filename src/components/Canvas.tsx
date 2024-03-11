import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  OrbitControls,
  Text,
} from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  N8AO,
  ToneMapping,
  TiltShift2
} from "@react-three/postprocessing";

import Logo from "./_Logo";
import Particles from "./_Particles"

const _ = () => {
  return (
    <Canvas
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 50], fov: 35 }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.4} />

      <Logo />
      <Particles count={500} />
      <Text
        font="/fonts/TTHovesPro-Medium.ttf"
        fontSize={2.5}
        color="white"
        position={[0, 0, -2]}
      >
        THE FUTURE OF ADVANCED AI
        <meshBasicMaterial attach="material" color={"white"} />
      </Text>

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} intensity={2} />
        <N8AO aoRadius={0.5} intensity={2.5} />
        <ToneMapping
          adaptive={true}
          averageLuminance={0.1}
          middleGrey={0.5}
          maxLuminance={16}
        />
        <TiltShift2 blur={0.05} />
      </EffectComposer>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={1}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={1}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={1}
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
