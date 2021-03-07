import React from 'react';
import SavedColorList from './SavedColorList';
import { SavedColorsProvider } from './context';
const Index = () => {
  return (
    <SavedColorsProvider>
      <SavedColorList />
    </SavedColorsProvider>
  );
};

export default Index;
