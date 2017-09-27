import axios from 'axios';
// import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import {SET_CURRENT_USER} from './types';

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('jwtToken');
		delete axios.defaults.headers.common['Authorization'];
		dispatch(setCurrentUser({}));
	}
}

export function login(data) {

	return dispatch => {
		return axios.post('/users/api/auth', data).then(function(res, err){
				// console.log('data', data);
				const token = res.data.jwt;
				localStorage.setItem('jwtToken', token);
				localStorage.setItem('username', data.username);


				// setAuthorizationToken(token);
				if(token) {
					axios.defaults.headers.common['Authorization'] = 'Bearer ${token}';
				}
				else {
					delete axios.defaults.headers.common['Authorization'];
				}
				dispatch(setCurrentUser(jwt.decode(token)));
			});
		}
}