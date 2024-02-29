import React from 'react'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const Box2 = (props) => {
  const ref = useRef()
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)
  //
  useEffect(() => {
    console.log(ref.current)
  })

  //
  useFrame((state, delta) => {
    if (rotate) {
      ref.current.rotation.x -= 1 * delta
      ref.current.rotation.y -= 0.5 * delta
    }

    //
  })

  //
  useFrame(({ clock }) => {
    ref.current.position.y = Math.sin(clock.getElapsedTime())
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial
        color={0x00ff00}
        scale={hovered ? [2, 2, 2] : [1.1, 1.1, 1.1]}
        onPointerDown={() => setRotate(!rotate)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  )
}

export default Box2
