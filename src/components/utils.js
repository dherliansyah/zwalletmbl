import axiosinstance from 'axios';
import { ToastAndroid } from 'react-native';

export const URL_IMAGE = 'http://172.20.10.2:8000';
export const URL = `${URL_IMAGE}/api/v1`;
export const axios = axiosinstance.create({
	baseURL: URL
});

export const errorHandler = (error, callback) => {
	callback(true, error);
	if (!error.response) {
		return ToastAndroid.show('Connection Error', ToastAndroid.SHORT);
	} else {
		return ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
	}
};
