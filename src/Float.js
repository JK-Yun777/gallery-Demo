import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Float({ speed = 1, amplitude = 1, ...props }) {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.position.y = amplitude * Math.sin(clock.elapsedTime * speed))
  );
  return <group ref={ref} {...props} />;
}

export default Float;
