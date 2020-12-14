import { axios, errorHandler } from '../../components/utils';

export const onChangePassword = (data, token, callback) => {
	return (dispatch) => {
        axios.patch('/users',data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                // dispatch({type: "SET_CHANGEPASSWORD", payload: response.data.data[0]})
                callback(false, response)
            })
            .catch((error) => errorHandler(error, callback));
	};
};
