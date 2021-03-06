import React from 'react';
import ColorList from './ColorList';
import { ColorGeneratorProvider } from './context';
const Index = () => {
  return (
    <ColorGeneratorProvider>
      <ColorList />
    </ColorGeneratorProvider>
  );
};

export default Index;
