import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Link } from "react-router-dom";

function Scene() {
  const gltf = useLoader(GLTFLoader, "entrance/elig.glb");
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });
  return (
    <>
      <Environment files="entrance/skylit.hdr" />
      <directionalLight intensity={10} position={[-5, 5, 0]} />
      <directionalLight intensity={10} position={[5, -5, 0]} />
      <camera position={[0, 1, 0]} />
      <color attach="background" args={["black"]} />
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[-Math.PI / 2, Math.PI, Math.PI]}
        position={[0, 0, -0.5]}
      />
    </>
  );
}

export default function Entrance() {
  return (
    <Link to="/web">
      <Canvas>
        <Scene />
      </Canvas>
    </Link>
  );
}
