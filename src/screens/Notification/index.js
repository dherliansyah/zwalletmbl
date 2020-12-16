import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { onUserAllTransaction } from '../../redux/actions/History';

const Notification = ({ navigation }) => {
	const dispatch = useDispatch();
  const { dataHistory } = useSelector((s) => s.History);
	const { token } = useSelector((s) => s.Auth);
  const [ limit, setLimit ] = React.useState(5);
  const [ loading, setLoading ] = React.useState(true);

	React.useEffect(() => {
		const callbackHandler = (err, res) => {
      // console.log(err, res.data);
      setLoading(false);
			setLimit(5);
		};
		dispatch(onUserAllTransaction(token, callbackHandler));
  }, []);
  
  if (loading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#000" />
			</View>
		);
	}

	const renderItem = (item, index) => {
		return (
			<View style={{ paddingHorizontal: 20 }}>
				<View
					key={index}
					style={{
						flexDirection: 'row',
						backgroundColor: '#fff',
						borderRadius: 10,
						marginBottom: 15
					}}
				>
					<View style={{ paddingVertical: 30, paddingLeft: 15 }}>
						<Image source={require('../../Icons/arrow-up-red.png')} />
					</View>
					<View style={{ paddingVertical: 10, flex: 9, height: 80 }}>
						<Text
							style={{
								paddingLeft: 20,
								paddingTop: 20,
								fontSize: 18,
								color: '#646464',
								fontWeight: 'bold'
							}}
						>
							{item.receiver}
						</Text>
					</View>
					<View style={{ flex: 6, paddingVertical: 30 }}>
						<Text style={{ paddingLeft: 20, fontSize: 18, color: '#FF5B37' }}>- Rp. {item.amount}</Text>
					</View>
				</View>
			</View>
		);
	};

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
						Notification
					</Text>
				</View>
			</View>
			{dataHistory.slice(0, limit).map(renderItem)}

			{limit < dataHistory.length ? (
				<TouchableOpacity onPress={() => setLimit(limit + 5)} style={{ padding: 5, alignItems: 'center' }}>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Load More</Text>
				</TouchableOpacity>
			) : null}
		</ScrollView>
	);
};

export default Notification;
