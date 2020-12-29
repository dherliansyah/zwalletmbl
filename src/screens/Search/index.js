import React from 'react';
import { View, Text, Image, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { onSearchUser } from '../../redux/actions/Users';
import blank from '../../Icons/blank.png';
import Axios from 'axios';
import { URL_IMAGE } from '../../components/utils';

const Search = ({ navigation }) => {
	const dispatch = useDispatch();
	const [ username, setusername ] = React.useState('');
	const [ loading, setLoading ] = React.useState(true);
	const { users } = useSelector((s) => s.Search);
	const { token } = useSelector((s) => s.Auth);
	const [ limit, setLimit ] = React.useState(5);

	React.useEffect(
		() => {
			const callbackHandler = (err, res) => {
				setLimit(5);
				setLoading(false);
			};
			dispatch(onSearchUser(username, token, callbackHandler));
		},
		[ username ]
	);

	if (loading) {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ActivityIndicator size="large" color="#000" />
			</View>
		);
	}

	const renderItem = (item, index) => {
		return (
			<View
				key={index}
				style={{
					marginBottom: 15,
					flexDirection: 'row',
					backgroundColor: '#fff',
					borderRadius: 10
				}}
			>
				<View style={{ paddingTop: 20, paddingLeft: 15 }}>
					{!item.photo ? (
						<Image source={blank} style={{ width: 60, height: 55 }} />
					) : (
						<Image
							style={{ width: 60, height: 55 }}
							source={{
								uri: `${URL_IMAGE}/images/${item.photo}`
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
						onPress={() => navigation.navigate('Amount', item)}
					>
						{item.name}
					</Text>
					<Text style={{ paddingLeft: 20, color: '#646464', fontSize: 18 }}>+62 {item.phone}</Text>
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
						Find Receiver
					</Text>
				</View>
			</View>
			<View style={{ padding: 20 }}>
				<View style={{ position: 'absolute', zIndex: 2, top: 28, left: 10 }}>
					<Image style={{ marginLeft: 20, marginTop: 5 }} source={require('../../Icons/search.png')} />
				</View>
				<TextInput
					style={{
						backgroundColor: 'rgba(58, 61, 66, 0.1)',
						paddingLeft: 50,
						borderRadius: 10,
						height: 50
					}}
					placeholder="Search receiver here"
					autoCapitalize={'none'}
					returnKeyType="search"
					onChangeText={(e) => setusername(e)}
				/>
				<View style={{ marginTop: 30, marginBottom: 20 }}>
					<Text style={{ fontSize: 18, color: '#514F5B', fontWeight: 'bold' }}>All Contacts</Text>
					{/* <Text style={{fontSize: 15, color: '#8F8F8F'}}>
            {data.length} Contact Founs
          </Text> */}
				</View>

				{/* {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginBottom: 15,
                flexDirection: 'row',
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              <View style={{paddingTop: 20, paddingLeft: 15}}>
                {!item.photo ? (
                  <Image source={blank} style={{width: 60, height: 55}} />
                ) : (
                  <Image
                    style={{width: 60, height: 55}}
                    source={{
                      uri: `http://192.168.100.9:8000/image/${item.photo}`,
                    }}
                  />
                )}
              </View>
              <View style={{flexDirection: 'column', flex: 9, height: 96}}>
                <Text
                  style={{
                    paddingLeft: 20,
                    paddingTop: 20,
                    fontSize: 18,
                    color: '#646464',
                    fontWeight: 'bold',
                  }}
                  onPress={() => navigation.navigate('Amount')}>
                  {item.username}
                </Text>
                <Text style={{paddingLeft: 20, color: '#646464', fontSize: 18}}>
                  +62 {item.phone}
                </Text>
              </View>
            </View>
          );
        })} */}

				{users.slice(0, limit).map(renderItem)}

				{limit < users.length ? (
					<TouchableOpacity onPress={() => setLimit(limit + 5)} style={{ padding: 5, alignItems: 'center' }}>
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Load More</Text>
					</TouchableOpacity>
				) : null}
			</View>
		</ScrollView>
	);
};

export default Search;
