import React from 'react'
import { Canvas, Box } from 'plant-fiber-ui';
import { DefaultXRControllers } from 'react-xr' 

const App = (props) => {
  return (
    <Canvas webxr>
      <DefaultXRControllers />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default App;
