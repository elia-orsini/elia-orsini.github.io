import {
  Environment,
  MeshReflectorMaterial,
  PerspectiveCamera,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Model } from "./components/Motorcyclist";
import { Suspense, useState } from "react";

const Motorcyclist = () => {
  return (
    <group dispose={null}>
      <Model scale={[2.8, 2.8, 2.8]} position={[0, -2.5, 0]} castShadow />
    </group>
  );
};

const Camera = () => {
  const scroll = useScroll();
  const [range, setRange] = useState(0);

  // useFrame(() => {
  //   console.log(scroll.range(0,1/3));
  // });

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 1, 8]}
      rotation={[-0.1, 0, 0]}
    />
  );
};

const Playground = () => {
  return (
    <Suspense fallback={<p className="mx-auto my-auto">loading</p>}>
      <Canvas
        shadows
        className="h-screen"
        id="planeSection"
        style={{
          height: "100%",
          left: "0%",
          position: "absolute",
          zIndex: "0",
        }}
      >
        <directionalLight castShadow intensity={3} position={[1, 3, 0]} />
        <Environment files="/skylit.hdr" />

        <Motorcyclist />

        <ScrollControls pages={3} damping={0.1}>
          <Camera />
        </ScrollControls>

        <mesh position={[0, -2.5, 0]} rotation-x={-Math.PI / 2} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial roughness={1} color="#000000" metalness={0} />
        </mesh>

        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={1.7} height={500} />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
};

export default Playground;
