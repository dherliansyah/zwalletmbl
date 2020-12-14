import React from 'react';
import {View, Text, Image, BackHandler} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import blank from '../../Icons/blank.png';
import {URL_IMAGE} from '../../components/utils';

const Success = ({navigation, route}) => {
  // React.useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     () => {
  //       navigation.navigate('Home');
  //     },
  //   );
  //   return () => {
  //     backHandler.remove();
  //   };
  // }, []);
  return (
    <ScrollView style={{backgroundColor: '#e9eef7'}}>
      <View style={{padding: 20}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{marginTop: 30}}
            source={require('../../Icons/success.png')}
          />
          <Text
            style={{
              fontSize: 22,
              color: '#4D4B57',
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            Transfer Success
          </Text>
        </View>
        <View style={{marginBottom: 20, marginTop: 20}}>
          <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
            Details
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              Amount
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              Rp. {route.params.amount}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              Balance Left
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              Rp. {route.params.balance - parseInt(route.params.amount)}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              Date & Time
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {new Date().toLocaleString()}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 14,
              }}>
              Notes
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {route.params.note}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
            Transfer to
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 15,
            marginTop: 30,
          }}>
          <View style={{paddingTop: 20, paddingLeft: 15}}>
            {!route?.params?.photo ? (
              <Image source={blank} style={{width: 60, height: 55}} />
            ) : (
              <Image
                style={{width: 60, height: 55}}
                source={{
                  uri: `${URL_IMAGE}/images/${route?.params?.photo}`,
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
              }}>
              {route.params.name}
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                color: '#7A7886',
                fontSize: 14,
              }}>
              +62 {route.params.phone}
            </Text>
          </View>
        </View>
        <Button
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: '#6379F4',
            borderRadius: 15,
          }}
          mode="contained"
          onPress={() => navigation.navigate('Home')}>
          Back to Home
        </Button>
      </View>
    </ScrollView>
  );
};

export default Success;
