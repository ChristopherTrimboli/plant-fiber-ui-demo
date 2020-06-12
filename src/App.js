import React from 'react'
import { Box } from 'plant-fiber-ui';
import { VRCanvas, DefaultXRControllers } from 'react-xr' 

const App = (props) => {
  return (
    <VRCanvas>
      <DefaultXRControllers />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </VRCanvas>
  );
}

export default App;
