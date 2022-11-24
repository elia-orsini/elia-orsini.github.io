import { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { Link } from "react-router-dom";

function App2() {
  const gltf = useLoader(GLTFLoader, 'entrance/elig.glb')
  const ref = useRef()
  useFrame(() => {
      ref.current.rotation.z += 0.01
  })
  return (
    <>
      <Environment files="entrance/skylit.hdr" />
      <EffectComposer>
        <Bloom luminanceThreshold={0.7} luminanceSmoothing={0.6} height={600} />
      </EffectComposer>
      <directionalLight intensity={10} position={[-5,5,0]} />
      <directionalLight intensity={10} position={[5,-5,0]} />
      <camera position={[0,1,0]} />
      <color attach="background" args={["black"]} />
      <primitive 
        ref={ref} 
        object={gltf.scene} 
        rotation={[-Math.PI/2, Math.PI, Math.PI]}
        position={[0,0,0.5]}
      />
      {/* <OrbitControls /> */}
    </>
  )
}

export default function Entrance() {
  return (
    <Link to="/web">
    <Canvas>
      <App2 />
    </Canvas>
    </Link>
  )
}
