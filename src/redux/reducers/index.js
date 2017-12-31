import { combineReducers } from 'redux';
import { hello } from './hello';
import { email } from './email';
import { create } from './create';

export default combineReducers({
  hello, create, email
});
