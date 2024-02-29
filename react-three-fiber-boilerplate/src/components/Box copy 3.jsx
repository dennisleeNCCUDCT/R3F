import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const Box3 = (props) => {
  const ref = useRef()
  //
  useEffect(() => {
    console.log(ref.current)
  })

  //
  useFrame((_, delta) => {
    ref.current.rotation.x -= 1 * delta
    ref.current.rotation.y -= 0.5 * delta
    // ref.current.position.z -= 0.00005 * delta
  })
  //
  useFrame(({ clock }) => {
    ref.current.position.y = Math.sin(clock.getElapsedTime())
  })
  //
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

export default Box3
