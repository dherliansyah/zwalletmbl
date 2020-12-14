import Axios from 'axios';
import {ToastAndroid} from 'react-native';
import {URL} from '../../components/utils';

const LoginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

const LoginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: token,
  };
};

const LoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    dispatch(LoginRequest());
    return Axios({
      method: 'POST',
      data: fields,
      url: `${URL}api/v1/auth/login`,
    })
      .then((res) => {
        const data = res.data;
        // console.log(data, 'dataas');
        ToastAndroid.show(
          `Selamat Datang ${data.token.username}`,
          ToastAndroid.SHORT,
        );
        dispatch(LoginSuccess(data));
      })
      .catch((err) => {
        const message = err.data;
        ToastAndroid.show('gagal masuk cuyy', ToastAndroid.SHORT);
        dispatch(LoginError(message));  
      });
  };
};

export const LoginLogout = () => {
  return {
    type: 'LOGOUT',
  };
};
