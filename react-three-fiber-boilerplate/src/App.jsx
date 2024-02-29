import React from 'react'

import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import Box4 from './components/Box copy 2'
import Box3 from './components/Box copy 3'
import Box2 from './components/Box copy'
import { Stats } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

//
const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box position={[-0.75, 0, 0]} name="A" />
      <Box2 position={[0.75, 0, 1]} name="B" />
      <Box3 position={[0.75, 1.25, 0]} name="C" />
      <Box4 position={[-0.75, -1.25, 0]} name="D" />
      <OrbitControls />
      <Stats />
    </Canvas>
  )
}

export default App
