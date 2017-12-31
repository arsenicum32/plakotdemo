import { handleActions } from 'redux-actions';

export const initialState = {
  width: '120',
  height: '120',
  title: '',
  description: ''
};

export const create = handleActions({
  CHANGE_WIDTH: (state, action) => ({ ...state, width: action.payload }),
  CHANGE_HEIGHT: (state, action) => ({ ...state, height: action.payload }),
  CHANGE_TITLE: (state, action) => ({ ...state, title: action.payload }),
  CHANGE_DESCRIPTION: (state, action) => ({ ...state, description: action.payload })
}, initialState);
