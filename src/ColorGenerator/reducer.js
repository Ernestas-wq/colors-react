import {
  SET_LOADING,
  SET_COLOR,
  SET_ERROR,
  SET_LIST,
  COPY_TO_CLIPBOARD,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COLOR: {
      return { ...state, color: action.payload };
    }
    case SET_LIST: {
      return { ...state, list: action.payload };
    }
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, isError: action.payload };
    }
    default:
      throw new Error(`No matching ${action.type} action type`);
  }
};
export default reducer;
