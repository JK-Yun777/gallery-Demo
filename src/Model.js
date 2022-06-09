import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./imgs/scene.gltf");
  console.log(nodes);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

export default Model;
