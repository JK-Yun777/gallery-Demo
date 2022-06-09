import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Loader from "./Loader";
import Wall from "./Wall";
import MonaLisa from "./MonaLisa";
import Starrynight from "./Starrynight";
// import Model from "./Model";

function Main() {
  return (
    <>
      <Canvas className="canvas" camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[0, 10, 0]} intensity={0.5} />
        <OrbitControls />
        <Stars
          radius={100}
          depth={100}
          count={3000}
          factor={6}
          saturation={0}
          fade={true}
        />
        <Suspense fallback={<Loader />}>
          <Wall />
          <MonaLisa />
          <Starrynight />
          {/* <Model /> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default Main;
