import { SET_LOADING, SET_ERROR, SET_LIST, COPY_TO_CLIPBOARD } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`No matching ${action.type} action type`);
  }
};
export default reducer;
