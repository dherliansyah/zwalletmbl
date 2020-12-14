/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Button, IconButton} from 'react-native-paper';

const ResPasswordBlank = ({navigation}) => {
  const inputPasswordBlank = React.useRef();
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
            Create and confirm your new password so
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
            }}>
            you can login Zwallet.
          </Text>
          <View style={{padding: 20}}>
            <View style={{position: 'absolute', zIndex: 2, top: 30, left: 10}}>
              <IconButton color="#444" icon="lock-outline" />
            </View>
            <TextInput
              style={{backgroundColor: '#fff', paddingLeft: 30}}
              label="Password"
              placeholder="Create new password"
              autoCapitalize={'none'}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() => inputPasswordBlank.current.focus()}
            />
          </View>
          <View style={{padding: 20}}>
            <View style={{position: 'absolute', zIndex: 2, top: 30, left: 10}}>
              <IconButton color="#444" icon="lock-outline" />
            </View>
            <TextInput
              ref={inputPasswordBlank}
              style={{backgroundColor: '#fff', paddingLeft: 30}}
              label="Password"
              placeholder="Confirm new password"
              autoCapitalize={'none'}
              returnKeyType="send"
              secureTextEntry={true}
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
              onPress={() => navigation.navigate('Login')}>
              Reset Password
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ResPasswordBlank;
