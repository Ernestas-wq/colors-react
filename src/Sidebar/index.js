import React from 'react';
import Sidebar from './Sidebar';
import { SidebarProvider } from './context';
const Index = () => {
  return (
    <SidebarProvider>
      <Sidebar></Sidebar>
    </SidebarProvider>
  );
};

export default Index;
