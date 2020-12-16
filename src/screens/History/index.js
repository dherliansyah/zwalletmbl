import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { onUserAllTransaction } from '../../redux/actions/History';

const History = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataHistory} = useSelector((s) => s.History);
  const {token} = useSelector((s) => s.Auth);
  const [loading, setLoading] = React.useState(true);
  const [limit, setLimit] = React.useState(5);

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
    return(
          <View
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: 10,
              marginBottom: 15,
            }}>
            <View style={{paddingTop: 20, paddingLeft: 15}}>
              <Image source={require('../../Icons/rectangle.png')} />
            </View>
            <View style={{flexDirection: 'column', flex: 9, height: 96}}>
              <Text
                style={{
                  paddingLeft: 20,
                  paddingTop: 20,
                  fontSize: 18,
                  color: '#646464',
                  fontWeight: 'bold',
                }}>
                {item.receiver}
              </Text>
              <Text style={{paddingLeft: 20, color: '#646464', fontSize: 18}}>
                Subcription
              </Text>
            </View>
            <View style={{flex: 7, paddingTop: 30}}>
              <Text style={{paddingLeft: 20, fontSize: 18, color: 'red'}}>
                - Rp. {item.amount}
              </Text>
            </View>
          </View>
    );
  };


  return (
    <ScrollView style={{backgroundColor: '#e9eef7'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <IconButton
            icon="arrow-left"
            size={35}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 20,
              fontSize: 20,
              color: '#4D4B57',
              fontWeight: 'bold',
            }}>
            History
          </Text>
        </View>
      </View>

      {dataHistory.slice(0, limit).map(renderItem)}
      {limit < dataHistory.length ? (
				<TouchableOpacity onPress={() => setLimit(limit + 5)} style={{ padding: 5, alignItems: 'center', marginVertical:10,}}>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Load More</Text>
				</TouchableOpacity>
			) : null}

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 57,
              height: 57,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              marginBottom: 15,
              marginRight: 20,
            }}>
            <Image source={require('../../Icons/arrow-up-red.png')} />
          </View>
          <View
            style={{
              width: 57,
              height: 57,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              marginBottom: 15,
              marginRight: 20,
            }}>
            <Image source={require('../../Icons/arrow-up.png')} />
          </View>
          <View
            style={{
              width: 189,
              height: 57,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6379F4'}}>
              Filter by Date
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default History;
