import {
  SET_LOADING,
  SET_COLOR,
  SET_GENERATE_ERROR,
  SET_COLOR_LIST,
  SAVE_COLOR,
  OPEN_SAVE_COLOR_MODAL,
  CLOSE_SAVE_COLOR_MODAL,
  SET_SAVE_COLOR_NAME,
} from './actions';
import { getSavedColorList } from './utils';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COLOR: {
      const newGeneratorState = { ...state.generator, color: action.payload };
      console.log(newGeneratorState);
      return { ...state, generator: newGeneratorState };
    }
    case SET_COLOR_LIST: {
      return { ...state, colorList: action.payload };
    }
    case SET_LOADING: {
      const newGeneratorState = { ...state.generator, isLoading: action.payload };
      return { ...state, generator: newGeneratorState };
    }
    case SET_GENERATE_ERROR: {
      const newGeneratorState = { ...state.generator, isError: action.payload };
      return { ...state, generator: newGeneratorState };
    }

    case SET_SAVE_COLOR_NAME: {
      const newSaveColorModal = {
        ...state.saveColorModal,
        colorName: action.payload,
      };
      return { ...state, saveColorModal: newSaveColorModal };
    }

    case SAVE_COLOR: {
      const savedColorList = getSavedColorList();
      const newSavedColorList = [...savedColorList, action.payload];
      localStorage.setItem('savedColorList', JSON.stringify(newSavedColorList));
      return { ...state, savedColorList: newSavedColorList };
    }
    case OPEN_SAVE_COLOR_MODAL: {
      const newSaveColorModal = { ...state.saveColorModal, isOpen: true };
      return { ...state, saveColorModal: newSaveColorModal };
    }
    case CLOSE_SAVE_COLOR_MODAL: {
      const newSaveColorModal = { ...state.saveColorModal, isOpen: false };
      return { ...state, saveColorModal: newSaveColorModal };
    }

    default:
      throw new Error(`No matching ${action.type} action type`);
  }
};
export default reducer;
