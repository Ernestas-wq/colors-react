import React from 'react';
import Sidebar from './Sidebar';
import { SidebarProvider } from './context';
const Index = () => {
  return (
    <SidebarProvider>
      <Sidebar />
    </SidebarProvider>
  );
};

export default Index;
