import {
  Environment,
  MeshReflectorMaterial,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { AnimationMixer } from "three";
import { Model } from "./components/Motorcyclist";

const Motorcyclist = () => {
  const gltf = useGLTF("/motorcyclist.gltf");

  let mixer;

  if (gltf.animations.length) {
    mixer = new AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <group dispose={null}>
      <Model scale={[2.8, 2.8, 2.8]}
        position={[0, -2.5, 0]} castShadow />
    </group>
  );
};

const Playground = () => {
  return (
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
      <PerspectiveCamera makeDefault position={[0, 1, 8]} rotation={[-.1,0,0]} />
      <Environment files="/skylit.hdr" />

      <Motorcyclist />

      <mesh position={[0, -2.5, 0]} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial roughness={1} color="#000000" metalness={0} />
      </mesh>


      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={1.7} height={500} />
      </EffectComposer>
    </Canvas>
  );
};

export default Playground;
