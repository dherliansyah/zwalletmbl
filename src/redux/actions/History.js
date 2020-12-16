import { axios, errorHandler } from '../../components/utils';

export const onUserAllTransaction = (data, callback) => {
	return (dispatch) => {
		axios
			.get('transfer/history/all', {
				headers: {
					Authorization: `Bearer ${data}`
				}
			})
			.then((response) =>{
				dispatch({type: 'SET_USERS_TRANSACTION', payload: response.data.data});
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};

