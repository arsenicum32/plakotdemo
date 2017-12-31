import { handleActions } from 'redux-actions';

export const initialState = {
  width: '120',
  height: '120'
};

export const create = handleActions({
  CHANGE_WIDTH: (state, action) => ({ ...state, width: action.payload }),
  CHANGE_HEIGHT: (state, action) => ({ ...state, height: action.payload })
}, initialState);
