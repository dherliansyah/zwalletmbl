import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {Button} from 'react-native-paper';

const PinSuccess = ({navigation}) => {
  return (
    <>
      <ScrollView style={{backgroundColor: '#e9eef7'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 26,
              color: '#6379F4',
              fontWeight: 'bold',
              marginTop: 100,
              marginBottom: 100,
            }}>
            Zwallet
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            shadowColor: 'black',
            minHeight: 424,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../Icons/success.png')} />
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#3A3D42',
              textAlign: 'center',
            }}>
            PIN Successfully Created
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
              marginTop: 30,
            }}>
            Your PIN was successfully created and you can
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
            }}>
            now access all the features in Zwallet. Login to
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
            }}>
            your new account and start exploring!
          </Text>
          <View style={{padding: 20}}>
            <Button
              style={{
                padding: 10,
                backgroundColor: '#6379F4',
                borderRadius: 15,
              }}
              mode="contained"
              onPress={() => navigation.navigate('Login')}>
              Login Now
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PinSuccess;
