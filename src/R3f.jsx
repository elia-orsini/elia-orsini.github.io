import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, MeshReflectorMaterial, Environment } from '@react-three/drei'
import Me from './Me'

export default function R3f() {
  return (
      <Canvas dpr={[1, 2]} shadows>
        <Suspense fallback={null}>
          <Environment files={"kiara_1_dawn_1k.hdr"} />
          <group position={[0,-1.2,0]}>
            <Me scale={[0.19, 0.19, 0.19]} position={[0,0,2.5]} />
          </group>
        </Suspense>
        <PerspectiveCamera makeDefault fov={60} rotation={[Math.PI/1.26, Math.PI, Math.PI]} position={[0, 1, 4]} near={0.01} far={10000000}>
          <directionalLight position={[40, 0, 0]} angle={0.15} penumbra={1} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} />
        </PerspectiveCamera>
      </Canvas>
  )
}