import { handleActions } from 'redux-actions';

export const initialState = {
  email: "" ,
  canSignUp: false ,
  thanks: false
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const email = handleActions({
  CHANGE_EMAIL: (state, action) => ({ ...state, email: action.payload , canSignUp : validateEmail(action.payload)  }),
  SEND_EMAIL: (state, action) => ({ ...state, thanks: true })
}, initialState);
