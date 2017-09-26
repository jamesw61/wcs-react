import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
	isAuthenticated: false,
	user: {}
};


export default (state = initialState, action = {}) => {

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