import React, { useRef, useState  } from 'react'
import { Square } from 'plant-fiber-ui';
import { Canvas, useFrame } from 'react-three-fiber'

const App = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Square position={[-1.2, 0, 0]} useRef={useRef} useState={useState} useFrame={useFrame} />
      <Square position={[1.2, 0, 0]} useRef={useRef} useState={useState} useFrame={useFrame} />
    </Canvas>
  );
}

export default App;
