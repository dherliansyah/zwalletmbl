import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {HistoryUser} from '../../redux/actions/History';

const History = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.History);
  const {token} = useSelector((s) => s.Auth);

  React.useEffect(() => {
    dispatch(
      HistoryUser({
        token: token.token.token,
      }),
    );
  }, []);

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

      {data.map((item, index) => {
        return (
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
                {item.firstName}
              </Text>
              <Text style={{paddingLeft: 20, color: '#646464', fontSize: 18}}>
                Subcription
              </Text>
            </View>
            <View style={{flex: 7, paddingTop: 30}}>
              <Text style={{paddingLeft: 20, fontSize: 18, color: '#1EC15F'}}>
                + Rp. {item.amount}
              </Text>
            </View>
          </View>
        );
      })}
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
