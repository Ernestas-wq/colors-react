import React, { useRef, useEffect } from 'react';
import { links } from './links';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSidebarContext } from './context';

const Sidebar = () => {
  const sidebarRef = useRef(null);
  const listRef = useRef(null);
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebarContext();
  useEffect(() => {
    if (!isSidebarOpen) {
      sidebarRef.current.style.flex = '0.035';
      listRef.current.style.display = 'none';
      listRef.current.style.opacity = '0';
    } else {
      sidebarRef.current.style.flex = '0.2';
      const timeout = setTimeout(() => {
        listRef.current.style.display = 'block';
        setTimeout(() => {
          listRef.current.style.opacity = '1';
        }, 100);
      }, 300);
      return () => clearTimeout(timeout);
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
        {links.map(link => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="sidebar__item">
              {icon}
              <Link className="sidebar__link" to={url}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
