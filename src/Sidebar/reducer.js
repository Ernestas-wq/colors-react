import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR: {
      return { ...state, isSidebarOpen: true };
    }
    case CLOSE_SIDEBAR: {
      return { ...state, isSidebarOpen: false };
    }

    default: {
      throw new Error(`No matching ${action.type} action type`);
    }
  }
};
export default reducer;
