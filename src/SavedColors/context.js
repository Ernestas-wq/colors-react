import React, { useReducer, useContext } from 'react';
import { DELETE_COLOR } from './actions';

import reducer from './reducer';

const SavedColorsContext = React.createContext();

const initialState = {};

const SavedColorsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const test = () => console.log('test');

  return (
    <SavedColorsContext.Provider value={{ test }}>
      {children}
    </SavedColorsContext.Provider>
  );
};

export const useSavedColorsContext = () => useContext(SavedColorsContext);
export { SavedColorsContext, SavedColorsProvider };
