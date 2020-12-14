/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Button, IconButton} from 'react-native-paper';

const ForgotPassword = ({navigation}) => {
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
              marginTop: 30,
              marginBottom: 40,
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
            minHeight: 550,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#3A3D42',
              textAlign: 'center',
              marginTop: 40,
            }}>
            Reset Password
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
              marginTop: 30,
            }}>
            Enter your Zwallet e-mail so we can send
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
            }}>
            you a password reset link.
          </Text>
          <View style={{padding: 20}}>
            <View style={{position: 'absolute', zIndex: 2, top: 70, left: 10}}>
              <IconButton color="#444" icon="email-outline" />
            </View>
            <TextInput
              style={{
                backgroundColor: '#fff',
                marginTop: 40,
                marginBottom: 10,
                paddingLeft: 30,
              }}
              label="Email"
              placeholder="Enter your e-mail"
              autoCapitalize={'none'}
              returnKeyType="send"
            />
          </View>
          <View style={{padding: 20}}>
            <Button
              style={{
                padding: 10,
                backgroundColor: '#6379F4',
                borderRadius: 15,
              }}
              mode="contained"
              onPress={() => navigation.navigate('ResPasswordBlank')}>
              Confirm
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPassword;
