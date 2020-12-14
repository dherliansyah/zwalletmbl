import {axios, errorHandler} from '../../components/utils';

export const onTransfer = (data, token, callback) => {
  return (dispatch) => {
    axios
      .post('/transfer', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({type: 'SET_TOPUP', payload: data.amount});
        callback(false, response);
      })
      .catch((error) => errorHandler(error, callback));
  };
};
