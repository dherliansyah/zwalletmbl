import React, { useState } from 'react';
import { View, Alert, Text, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
// import {GetUsers} from '../../redux/actions/Users';
// import {LoginLogout} from '../../redux/actions/Auth';
import blank from '../../Icons/blank.png';
import { io } from 'socket.io-client';
import { URL_IMAGE } from '../../components/utils';
import { onUsers } from '../../redux/actions/Users';

const Home = ({ navigation }) => {
	const dispatch = useDispatch();
	const { data } = useSelector((s) => s.Users);
	const { token } = useSelector((s) => s.Auth);
	const [ loading, setLoading ] = useState(true);
	// const [balance, setBalance] = React.useState('');
	// // const [itemId, setItemId] = React.useState(45);
	// const socket = io('http://192.168.100.9:8000');

	React.useEffect(() => {
		const callbackHandler = (err, res) => {
			// console.log(err, res.data);
			setLoading(false);
		};
		dispatch(onUsers(token, callbackHandler));
	}, []);

	React.useEffect(() => {
		const unsubscribe = messaging().onMessage(async (remoteMessage) => {
			dispatch({ type: 'ADD_BALANCE', payload: remoteMessage.data.balance });
			ToastAndroid.show(remoteMessage.notification.body + remoteMessage.data.balance, ToastAndroid.LONG);
		});

		return unsubscribe;
	}, []);

	// socket.emit('data-user', 45);
	// socket.on('get-data', (data) => {
	//   setBalance(data);
	// });

	// React.useEffect(() => {
	// 	return () => {
	// 		socket.off('get-data');
	// 	};
	// }, []);
	// console.log(`http://192.168.100.9:8000/image/${data.photo}`);
	if (loading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#000" />
			</View>
		);
	}
	return (
		<ScrollView style={{ backgroundColor: '#e9eef7' }}>
			<View style={{ padding: 20 }}>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
						{!data.photo ? (
							<Image style={{ width: 60, height: 55 }} source={blank} />
						) : (
							<Image
								style={{ width: 60, height: 55 }}
								source={{
									uri: `${URL_IMAGE}/images/${data.photo}`
								}}
							/>
						)}
					</TouchableOpacity>
					<View style={{ flexDirection: 'column', flex: 9 }}>
						<Text style={{ paddingLeft: 20, color: '#646464', fontSize: 18 }}>Hello,</Text>
						<Text
							style={{
								paddingLeft: 20,
								paddingTop: 10,
								fontSize: 18,
								color: '#646464',
								fontWeight: 'bold'
							}}
							onPress={() => navigation.navigate('Profile')}
						>
							{data.name}
						</Text>
					</View>
					<View style={{ flex: 2 }}>
						<IconButton icon="bell-outline" size={35} onPress={() => navigation.navigate('Notification')} />
					</View>
				</View>
				<View
					style={{
						marginTop: 20,
						flexDirection: 'column',
						height: 150,
						backgroundColor: '#6379F4',
						borderRadius: 20
					}}
				>
					<Text
						style={{
							paddingLeft: 30,
							paddingTop: 25,
							fontSize: 16,
							color: '#D0D0D0'
						}}
					>
						Balance
					</Text>

					<Text
						onPress={() => navigation.navigate('Details')}
						style={{
							paddingLeft: 30,
							paddingTop: 10,
							fontSize: 24,
							color: '#fff',
							fontWeight: 'bold'
						}}
					>
						Rp. {data.balance}
					</Text>

					{!data.phone ? (
						<Text
							style={{
								paddingLeft: 30,
								paddingTop: 10,
								fontSize: 16,
								color: '#D0D0D0'
							}}
						>
							+62 --
						</Text>
					) : (
						<Text
							style={{
								paddingLeft: 30,
								paddingTop: 10,
								fontSize: 16,
								color: '#D0D0D0'
							}}
						>
							+62 {data.phone}
						</Text>
					)}
				</View>
				<View style={{ flexDirection: 'row', paddingTop: 20 }}>
					<Button
						style={{
							padding: 10,
							backgroundColor: '#6379F4',
							width: '47%',
							borderRadius: 15
						}}
						icon="arrow-up"
						mode="contained"
						onPress={() => navigation.navigate('Search')}
					>
						Transfer
					</Button>
					<Button
						style={{
							marginLeft: '6%',
							padding: 10,
							backgroundColor: '#6379F4',
							width: '47%',
							borderRadius: 15
						}}
						icon="plus"
						mode="contained"
						onPress={() => navigation.navigate('Topup')}
					>
						Top Up
					</Button>
				</View>
				<View style={{ flexDirection: 'row', marginTop: 30 }}>
					<View style={{ flexDirection: 'column', flex: 13 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 18, color: '#514F5B' }}>Transaction History</Text>
					</View>
					<View style={{ flex: 2 }}>
						<Text style={{ fontSize: 16, color: '#6379F4' }} onPress={() => navigation.navigate('History')}>
							See all
						</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: '#fff',
					borderRadius: 10,
					marginBottom: 15
				}}
			>
				<View style={{ paddingTop: 20, paddingLeft: 15 }}>
					{!data.photo ? (
						<Image
							style={{ width: 60, height: 55 }}
							source={{
								uri: `${URL_IMAGE}/images/${data.photo}`
							}}
						/>
					) : (
						<Image
							style={{ width: 60, height: 55 }}
							source={{
								uri: `${URL_IMAGE}/images/${data.photo}`
							}}
						/>
					)}
				</View>
				<View style={{ flexDirection: 'column', flex: 9, height: 96 }}>
					<Text
						style={{
							paddingLeft: 20,
							paddingTop: 20,
							fontSize: 18,
							color: '#646464',
							fontWeight: 'bold'
						}}
					>
						{data.name}
					</Text>
					<Text style={{ paddingLeft: 20, color: '#646464', fontSize: 18 }}>Subcription</Text>
				</View>
				<View style={{ flex: 7, paddingTop: 30 }}>
					<Text style={{ paddingLeft: 20, fontSize: 18, color: '#1EC15F' }}>+ Rp. {data.balance}</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Home;
