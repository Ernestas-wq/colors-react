import React, { useRef, useEffect } from 'react';
import { GoSettings, GoHome } from 'react-icons/go';
import { HiSave } from 'react-icons/hi';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSidebarContext } from './context';

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const listRef = useRef(null);
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebarContext();
  useEffect(() => {
    if (!isSidebarOpen) {
      sidebarRef.current.style.transform = 'translateX(-80%)';
      listRef.current.style.opacity = '0';
    } else {
      sidebarRef.current.style.transform = 'translateX(0)';
      listRef.current.style.opacity = '1';
    }
  }, [isSidebarOpen]);

  return (
    <nav className="sidebar" ref={sidebarRef}>
      {isSidebarOpen ? (
        <AiOutlineDoubleLeft className="sidebar__toggle" onClick={closeSidebar} />
      ) : (
        <AiOutlineDoubleRight className="sidebar__toggle" onClick={openSidebar} />
      )}

      <ul className="sidebar__list" ref={listRef}>
        <li className="sidebar__item">
          <GoHome />
          <Link className="sidebar__link" to="/home">
            home
          </Link>
        </li>

        <li className="sidebar__item">
          <GoSettings />
          <Link className="sidebar__link" to="/color-generator">
            color generator
          </Link>
        </li>

        <li className="sidebar__item">
          <HiSave />
          <Link className="sidebar__link" to="/saved-colors">
            saved colors
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
