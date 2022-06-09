import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader } from "@react-three/fiber";

function Wall() {
  const WallTexture = useLoader(TextureLoader, "./imgs/wall.jpg");

  return (
    <group>
      <mesh rotation={[0, 5.9, 0]} position={[0.5, 0, -0.6]}>
        <boxGeometry args={[8, 6, 0.5]} />
        <meshStandardMaterial map={WallTexture} />
      </mesh>
      <mesh rotation={[0, -2.2, 0]} position={[-5.2, 0, 0.2]}>
        <boxGeometry args={[7, 6, 0.5]} />
        <meshStandardMaterial
          map={WallTexture}
          roughness={2}
          metalness={0.1}
          attach="material"
          color={"#d2b48c"}
        />
      </mesh>
    </group>
  );
}

export default Wall;
