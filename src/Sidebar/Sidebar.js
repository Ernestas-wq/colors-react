import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <Link to="/color-generator">CGS</Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
