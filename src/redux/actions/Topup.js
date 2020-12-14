import { axios, errorHandler } from '../../components/utils';

export const onTopup = (data, callback) => {
	return (dispatch) => {
		axios
			.get('/topup', {
				headers: {
					Authorization: `Bearer ${data}`
				}
			})
			.then((response) => {
				dispatch({ type: 'SET_TOPUP', payload: response.data.data });
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};
