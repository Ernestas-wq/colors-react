import {
  SET_LOADING,
  SET_COLOR,
  SET_ERROR,
  SET_COLOR_LIST,
  SAVE_COLOR,
  OPEN_SAVE_COLOR_MODAL,
  CLOSE_SAVE_COLOR_MODAL,
} from './actions';
import { getSavedColorList } from './utils';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COLOR: {
      return { ...state, color: action.payload };
    }
    case SET_COLOR_LIST: {
      return { ...state, colorList: action.payload };
    }
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, isError: action.payload };
    }
    case SAVE_COLOR: {
      const savedColorList = getSavedColorList();
      const newSavedColorList = [...savedColorList, action.payload];
      localStorage.setItem('savedColorList', JSON.stringify(newSavedColorList));
      return { ...state, savedColorList: newSavedColorList };
    }
    case OPEN_SAVE_COLOR_MODAL: {
      return { ...state, isSaveColorModalOpen: true };
    }
    case CLOSE_SAVE_COLOR_MODAL: {
      return { ...state, isSaveColorModalOpen: false };
    }

    default:
      throw new Error(`No matching ${action.type} action type`);
  }
};
export default reducer;
