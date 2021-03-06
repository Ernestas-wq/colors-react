import React, { useRef, useEffect } from 'react';
import { useColorGeneratorContext } from './context';
import { useSidebarContext } from '../Sidebar/context';
import SearchForm from './SearchForm';
import SingleColor from './SingleColor';
import Loading from '../staticComponents/Loading';
const ColorList = () => {
  const colorGeneratorContainerRef = useRef(null);
  const isSidebarOpen = useSidebarContext();
  const { isLoading, list } = useColorGeneratorContext();

  useEffect(() => {
    isSidebarOpen
      ? (colorGeneratorContainerRef.current.style.flex = '0.8')
      : (colorGeneratorContainerRef.current.style.flex = '0.965');
  }, [isSidebarOpen]);

  return (
    <section className="color-list" ref={colorGeneratorContainerRef}>
      <SearchForm />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="colors">
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                hexColor={color.hex}
                index={index}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ColorList;
