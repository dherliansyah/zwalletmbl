import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton, Button, Switch, Modal, Portal, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import blank from '../../Icons/blank.png';
import imagePicker from 'react-native-image-picker';
import Axios from 'axios';
import { URL_IMAGE } from '../../components/utils';
import { onChangeName } from '../../redux/actions/Users';
import { axios, errorHandler } from '../../components/utils';

const Confirmation = ({ navigation }) => {
	const dispatch = useDispatch();
	const { data } = useSelector((s) => s.Users);
	const { token } = useSelector((s) => s.Auth);
	const [ isSwitchOn, setIsSwitchOn ] = React.useState(false);
	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
	const [ visible, setVisible ] = React.useState(false);
	const [ visibleName, setVisibleName ] = React.useState(false);
	const [ username, setusername ] = React.useState('');
	const [ loading, setLoading ] = useState(false);
	const showModalName = () => setVisibleName(true);
	const hideModalName = () => setVisibleName(false);
	const hideModal = () => setVisible(false);
	const containerStyle = {
		backgroundColor: 'white',
		padding: 20,
		margin: 20,
		borderRadius: 10
	};

	const onLogout = () => {
		dispatch({ type: 'SET_TOKEN', payload: '' });
		navigation.replace('Login');
	};

	const onSubmitName = () => {
		setLoading(true);
		const callbackHandler = (err, res) => {
			setLoading(false);
			if (!err) {
				ToastAndroid.show('Success update name', ToastAndroid.SHORT);
			}
		};
		const data = {
			name: username
		};
		dispatch(onChangeName(data, token, callbackHandler));
	};

	const uploadImage = () => {
		imagePicker.showImagePicker({}, (response) => {
			console.log('hasil dari picker: ', response);
			if (response.didCancel || response.error) {
				// ketika image tidak di upload
				alert("oops, you don't chouse image!");
			} else {
				const formData = new FormData();
				formData.append('photo', {
					type: response.type,
					uri: response.uri,
					name: response.fileName || response.uri.substr(response.uri.lastIndexOf('/') + 1)
				});

				const header = {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'multipart/form-data',
						Accept: 'application/json'
					}
				};
				axios
					.patch(`/users`, formData, header)
					.then((res) => {
						// jika berhasil
						dispatch({ type: 'SET_IMAGE', payload: res.data.data[0].photo });
						ToastAndroid.show('Update photo', ToastAndroid.SHORT);
						console.log('berhasil upload foto');
					})
					.catch((err) => {
						// jika gagal upload image dari API/BackEnd
						ToastAndroid.show('Update photo failed', ToastAndroid.SHORT);
						console.log('gagal upload foto');
					});
			}
		});
	};

	return (
		<ScrollView style={{ backgroundColor: '#e9eef7' }}>
			<View>
				<IconButton icon="arrow-left" size={35} onPress={() => navigation.navigate('Home')} />
			</View>
			<View style={{ padding: 20 }}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					{!data.photo ? (
						<Image source={blank} style={{ width: 60, height: 55 }} />
					) : (
						<Image
							style={{ width: 60, height: 55 }}
							source={{
								uri: `${URL_IMAGE}/images/${data.photo}`
							}}
						/>
					)}
					<Portal>
						<Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
							<Text>Example Modal. Click outside this area to dismiss.</Text>
						</Modal>
					</Portal>
					<Text style={{ fontSize: 16, color: '#7A7886', marginTop: 20 }} onPress={() => uploadImage()}>
						Edit
					</Text>
					<Portal>
						<Modal visible={visibleName} onDismiss={hideModalName} contentContainerStyle={containerStyle}>
							<Text
								style={{
									textAlign: 'center',
									paddingTop: 20,
									fontSize: 18,
									color: '#646464',
									fontWeight: 'bold'
								}}
							>
								{data.username}
							</Text>
							<View style={{ padding: 20 }}>
								<View style={{ position: 'absolute', zIndex: 2, top: 30, left: 20 }}>
									<IconButton color="#444" icon="account-outline" />
								</View>
								<TextInput
									style={{
										paddingLeft: 40,
										borderBottomWidth: 1,
										borderBottomColor: 'rgba(169, 169, 169, 0.6)'
									}}
									placeholder="Current Name"
									autoCapitalize={'none'}
									returnKeyType="send"
									value={username}
									onChangeText={(text) => setusername(text)}
									onSubmitEditing={() => onSubmitName()}
								/>
								<Button icon="account-outline" mode="contained" onPress={() => onSubmitName()}>
									Submit
								</Button>
							</View>
						</Modal>
					</Portal>
					<Text
						style={{
							marginTop: 30,
							fontSize: 24,
							fontWeight: 'bold',
							color: '#4D4B57'
						}}
						onPress={showModalName}
					>
						{data.name}
					</Text>
					<Text style={{ fontSize: 16, color: '#7A7886' }}>+62 {data.phone}</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: '#fff',
						borderRadius: 10,
						marginBottom: 5,
						marginTop: 10
					}}
				>
					<View style={{ flexDirection: 'row', flex: 9, height: 58 }}>
						<Text
							style={{
								paddingLeft: 20,
								paddingTop: 15,
								fontSize: 18,
								color: '#4D4B57',
								fontWeight: 'bold'
							}}
							onPress={() => navigation.navigate('PersonalInformation')}
						>
							Personal Information
						</Text>
						<IconButton icon="arrow-right" size={30} style={{ marginLeft: 'auto' }} />
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: '#fff',
						borderRadius: 10,
						marginBottom: 5,
						marginTop: 10
					}}
				>
					<View style={{ flexDirection: 'row', flex: 9, height: 58 }}>
						<Text
							style={{
								paddingLeft: 20,
								paddingTop: 15,
								fontSize: 18,
								color: '#4D4B57',
								fontWeight: 'bold'
							}}
							onPress={() => navigation.navigate('ChangePassword')}
						>
							Change Password
						</Text>
						<IconButton icon="arrow-right" size={30} style={{ marginLeft: 'auto' }} />
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: '#fff',
						borderRadius: 10,
						marginBottom: 5,
						marginTop: 10
					}}
				>
					<View style={{ flexDirection: 'row', flex: 9, height: 58 }}>
						<Text
							style={{
								paddingLeft: 20,
								paddingTop: 15,
								fontSize: 18,
								color: '#4D4B57',
								fontWeight: 'bold'
							}}
							onPress={() => navigation.navigate('ChangePin')}
						>
							Change PIN
						</Text>
						<IconButton icon="arrow-right" size={30} style={{ marginLeft: 'auto' }} />
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: '#fff',
						borderRadius: 10,
						marginBottom: 5,
						marginTop: 10
					}}
				>
					<View style={{ flexDirection: 'row', flex: 9, height: 58 }}>
						<Text
							style={{
								paddingLeft: 20,
								paddingTop: 15,
								fontSize: 18,
								color: '#4D4B57',
								fontWeight: 'bold'
							}}
						>
							Notification
						</Text>
						<Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{ marginLeft: 'auto' }} />
					</View>
				</View>
				<Button
					style={{
						marginTop: 20,
						padding: 10,
						backgroundColor: '#6379F4',
						borderRadius: 15
					}}
					mode="contained"
					onPress={() => onLogout()}
				>
					Logout
				</Button>
			</View>
		</ScrollView>
	);
};

export default Confirmation;
