import { axios, errorHandler } from '../../components/utils';

export const onUsers = (data, callback) => {
	return (dispatch) => {
		axios
			.get('/users/login', {
				headers: {
					Authorization: `Bearer ${data}`
				}
			})
			.then((response) => {
				dispatch({ type: 'SET_USERS', payload: response.data.data[0] });
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};

export const onChangeName = (data, token, callback) => {
	return (dispatch) => {
		axios
			.patch('/users', data, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				dispatch({ type: 'SET_NAME', payload: data.name });
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};

export const onChangePhone = (data, token, callback) => {
	return (dispatch) => {
		axios
			.patch('users', data, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				dispatch({ type: 'SET_PHONE', payload: data.phone });
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};

export const onChangePin = (data, token, callback) => {
	return (dispatch) => {
		axios
			.patch('users', data, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((response) => {
				callback(false, response);
			})
			.catch((error) => errorHandler(error, callback));
	};
};

export const onSearchUser = (data, token, callback) => {
    console.log(token)
    return (dispatch) => {
        axios.get(`/users/search/query?q=${data}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                dispatch({type: "SET_SEARCH", payload: response.data.data})
                callback(false, response)
            })
            .catch((error) => errorHandler(error, callback));
    }
}