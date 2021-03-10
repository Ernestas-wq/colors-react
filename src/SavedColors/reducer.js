import { DELETE_COLOR, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_DELETE_MODAL: {
      const newDeleteModalState = {
        ...state.deleteModal,
        isOpen: true,
        id: action.payload.id,
        colorName: action.payload.name,
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
      return { ...state, deleteModal: newDeleteModalState };
    }
    default: {
      throw new Error(`No matching ${action.type} action type`);
    }
  }
};
export default reducer;
