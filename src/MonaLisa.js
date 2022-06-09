import React, { useState, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

// import Float from "./Float";

function MonaLisa() {
  const mesh = useRef();

  const PictureTexture = useLoader(TextureLoader, "./imgs/monarisa.jpg");

  const [active, setActive] = useState(false);

  const { scale, position, rotation } = useSpring({
    scale: active ? [3, 3.5, 3] : [2, 2.5, 2],
    position: active ? [0, 0, 3] : [-5, 0, 1.6],
    rotation: active ? [0, 0, 0] : [0, -2.2, 0],
  });

  // useFrame(() => {
  //   mesh.current.rotation.y += 0.01;
  // });

  return (
    <animated.mesh
      ref={mesh}
      onClick={() => {
        setActive(!active);
      }}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <boxGeometry args={[1.5, 1.6, 0.1]} />
      <meshStandardMaterial
        map={PictureTexture}
        roughness={2}
        metalness={0.1}
        attach="material"
        color={"#d2b48c"}
      />
    </animated.mesh>
  );
}

export default MonaLisa;
