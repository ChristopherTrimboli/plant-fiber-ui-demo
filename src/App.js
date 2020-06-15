import React from 'react';
import { Canvas, XRControllers, Box } from 'plant-fiber-ui';

const App = (props) => {

  const handleAxesChange = (axes, hand) => {
    console.log(axes, hand)
  }

  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 70] }} webxr>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <XRControllers 
        onSqueeze={(e) => console.log(e)} 
        onSelect={(e) => console.log(e)} 
        onSelectStart={(e) => console.log(e)} 
        onAxesChange={handleAxesChange}
      />
    </Canvas>
  );
}

export default App;
