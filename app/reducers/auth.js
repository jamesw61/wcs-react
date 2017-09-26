import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
	isAuthenticated: false,
	user: {}
};


export default (state = initialState, action = {}) => {
	console.log("inside reducer/auth.js");
	console.log(SET_CURRENT_USER);
	console.log(action.type);
	console.log(state);
	console.log("This is the action user .");
	console.log(action.user);
	var user = !isEmpty(action.user);
	switch(action.type) {

		
		case SET_CURRENT_USER:
			return {
				isAuthenticated: user,
				user: action.user
			};
			break;
		
		default: return state;
	}
}