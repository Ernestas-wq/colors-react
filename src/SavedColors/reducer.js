import {
  DELETE_COLOR,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  SET_COLOR_NAME,
  EDIT_COLOR,
  SET_SAVED_COLOR_LIST,
  SET_EDIT_MODAL_ALERT,
} from './actions';
import { getSavedColorList } from '../ColorGenerator/utils';

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_DELETE_MODAL: {
      const { id, colorName } = action.payload;
      const newDeleteModalState = {
        ...state.deleteModal,
        isOpen: true,
        id,
        colorName,
      };
      return { ...state, deleteModal: newDeleteModalState };
    }

    case CLOSE_DELETE_MODAL: {
      const newDeleteModalState = { ...state.deleteModal, isOpen: false };
      return { ...state, deleteModal: newDeleteModalState };
    }
    case DELETE_COLOR: {
      const newDeleteModalState = {
        ...state.deleteModal,
        isOpen: false,
        id: '',
        colorName: '',
      };
      delete state.savedColorList[action.payload];
      localStorage.setItem('savedColorList', JSON.stringify(state.savedColorList));

      return { ...state, deleteModal: newDeleteModalState };
    }

    case OPEN_EDIT_MODAL: {
      const { id, colorName } = action.payload;
      const newEditModalState = { ...state.editModal, isOpen: true, id, colorName };
      return { ...state, editModal: newEditModalState };
    }

    case CLOSE_EDIT_MODAL: {
      const newEditModalState = { ...state.editModal, isOpen: false };
      return { ...state, editModal: newEditModalState };
    }

    case SET_COLOR_NAME: {
      const newEditModalState = { ...state.editModal, colorName: action.payload };
      return { ...state, editModal: newEditModalState };
    }
    case SET_EDIT_MODAL_ALERT: {
      const newEditModalState = { ...state.editModal, alert: action.payload };
      return { ...state, editModal: newEditModalState };
    }

    case SET_SAVED_COLOR_LIST: {
      return { ...state, savedColorList: action.payload };
    }

    case EDIT_COLOR: {
      const { id, colorName } = action.payload;
      const savedColorList = getSavedColorList();
      savedColorList[id] = colorName;
      localStorage.setItem('savedColorList', JSON.stringify(savedColorList));
      return { ...state, savedColorList };
    }

    default: {
      throw new Error(`No matching ${action.type} action type`);
    }
  }
};
export default reducer;
