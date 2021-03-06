import React, { useRef, useEffect } from 'react';
import { useColorGeneratorContext } from './context';
import { useSidebarContext } from '../Sidebar/context';
import SearchForm from './SearchForm';
const ColorList = () => {
  const colorGeneratorContainerRef = useRef(null);
  const isSidebarOpen = useSidebarContext();

  useEffect(() => {
    isSidebarOpen
      ? (colorGeneratorContainerRef.current.style.flex = '0.8')
      : (colorGeneratorContainerRef.current.style.flex = '0.965');
  }, [isSidebarOpen]);

  return (
    <section className="color-list" ref={colorGeneratorContainerRef}>
      <SearchForm />
      <p>Hello from color list</p>
    </section>
  );
};

export default ColorList;
