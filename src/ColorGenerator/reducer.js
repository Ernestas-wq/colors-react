import {
  SET_LOADING,
  SET_COLOR,
  SET_GENERATE_ERROR,
  SET_COLOR_LIST,
  SAVE_COLOR,
  OPEN_SAVE_COLOR_MODAL,
  CLOSE_SAVE_COLOR_MODAL,
  SET_SAVE_COLOR_NAME,
  SET_SAVE_COLOR_ALERT,
} from './actions';
import { getSavedColorList } from './utils';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COLOR: {
      const newGeneratorForm = { ...state.generator, color: action.payload };
      console.log(newGeneratorForm);
      return { ...state, generatorForm: newGeneratorForm };
    }
    case SET_COLOR_LIST: {
      return { ...state, colorList: action.payload };
    }
    case SET_LOADING: {
      const newGeneratorForm = { ...state.generator, isLoading: action.payload };
      return { ...state, generatorForm: newGeneratorForm };
    }
    case SET_GENERATE_ERROR: {
      const newGeneratorForm = { ...state.generator, isError: action.payload };
      return { ...state, generatorForm: newGeneratorForm };
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
      savedColorList[action.payload.color] = action.payload.name;
      localStorage.setItem('savedColorList', JSON.stringify(savedColorList));
      return { ...state, savedColorList };
    }
    case OPEN_SAVE_COLOR_MODAL: {
      const newSaveColorModal = { ...state.saveColorModal, isOpen: true };
      return { ...state, saveColorModal: newSaveColorModal };
    }
    case CLOSE_SAVE_COLOR_MODAL: {
      const newSaveColorModal = { ...state.saveColorModal, isOpen: false };
      return { ...state, saveColorModal: newSaveColorModal };
    }
    case SET_SAVE_COLOR_ALERT: {
      const newSaveColorModal = { ...state.saveColorModal, alert: action.payload };
      return { ...state, saveColorModal: newSaveColorModal };
    }
    default:
      throw new Error(`No matching ${action.type} action type`);
  }
};
export default reducer;
