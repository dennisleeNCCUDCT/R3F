import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return;
  <>
    <OrbitControls />
    <directionalLight
      position={[5, 5, 5]}
      intensity={0.9}
      castShadow
      color={"#9e69da"}
    />
    ;<Rigidbody colliders={false} type={fixed} position-y={-0.5}>
      <CylinderCollider 
    </Rigidbody>
  </>;
};
