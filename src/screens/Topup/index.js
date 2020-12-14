import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { onTopup } from '../../redux/actions/Topup';

const Topup = ({ navigation }) => {
	const dispatch = useDispatch();
	const { data } = useSelector((s) => s.Topup);
	const { token } = useSelector((s) => s.Auth);
	const [ loading, setLoading ] = React.useState(true);

	React.useEffect(() => {
		const callbackHandler = (err, res) => {
			// console.log(err, res.data);
			setLoading(false);
		};
		dispatch(onTopup(token, callbackHandler));
	}, []);

	if (loading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#000" />
			</View>
		);
	}

	return (
		<ScrollView style={{ backgroundColor: '#e9eef7' }}>
			<View style={{ flexDirection: 'row' }}>
				<View>
					<IconButton icon="arrow-left" size={35} onPress={() => navigation.navigate('Home')} />
				</View>
				<View style={{ flexDirection: 'column' }}>
					<Text
						style={{
							paddingLeft: 20,
							paddingTop: 20,
							fontSize: 20,
							color: '#4D4B57',
							fontWeight: 'bold'
						}}
					>
						Top Up
					</Text>
				</View>
			</View>
			<View style={{ padding: 20 }}>
				<View
					style={{
						height: 96,
						flexDirection: 'row',
						backgroundColor: '#fff',
						borderRadius: 10
					}}
				>
					<View style={{ padding: 20 }}>
						<Image source={require('../../Icons/logo.png')} />
					</View>
					<View style={{ padding: 30, paddingLeft: 0, flexDirection: 'column' }}>
						<Text style={{ color: '#7A7886' }}>Virtual Account Number</Text>
						<Text style={{ color: '#4D4B57', fontWeight: 'bold' }}>2389 081393877946</Text>
					</View>
				</View>
				<View style={{ marginTop: 30 }}>
					<Text style={{ fontSize: 16, color: '#7A7886', textAlign: 'center' }}>
						We provide you virtual account number for top
					</Text>
					<Text style={{ fontSize: 16, color: '#7A7886', textAlign: 'center' }}>up via nearest ATM.</Text>
				</View>
				<View style={{ marginTop: 30, marginBottom: 20 }}>
					<Text style={{ fontSize: 18, color: '#514F5B', fontWeight: 'bold' }}>How to Top-Up</Text>
				</View>
				{data.map((item, index) => {
					return (
						<View
							key={index}
							style={{
								height: 88,
								flexDirection: 'row',
								backgroundColor: '#fff',
								borderRadius: 10,
								marginBottom: 15
							}}
						>
							<Text
								style={{
									paddingTop: 30,
									paddingLeft: 20,
									fontSize: 20,
									fontWeight: 'bold',
									color: '#6379F4'
								}}
							>
								{index + 1}
							</Text>
							<View style={{ padding: 20, paddingLeft: 25, paddingRight: 30 }}>
								<Text style={{ fontSize: 18, color: '#7A7886' }}>{item.title}</Text>
							</View>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default Topup;
