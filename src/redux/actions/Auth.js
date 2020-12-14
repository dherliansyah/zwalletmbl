import { ToastAndroid } from 'react-native';
import { axios, errorHandler } from '../../components/utils';

export const onLogin = (data, callback) => {
	return (dispatch) => {
		axios
			.post('/auth/login', data) //param data ada isi dari auth login
			.then((response) => {
				dispatch({ type: 'SET_TOKEN', payload: response.data.data.token });
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};

export const onRegister = (data, callback) => {
	return (dispatch) => {
		axios
			.post('/auth/register', data)
			.then((response) => {
				// dispatch({})
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};
