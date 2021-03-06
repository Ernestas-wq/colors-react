import React, { useReducer, useContext } from 'react';
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from './actions';
import reducer from './reducer';

const initialState = {
  isSidebarOpen: true,
};

const SidebarContext = React.createContext();
const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  return (
    <SidebarContext.Provider value={{ ...state, closeSidebar, openSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
export const useSidebarContext = () => useContext(SidebarContext);
export { SidebarContext, SidebarProvider };
