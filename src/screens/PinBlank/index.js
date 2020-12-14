import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useState } from 'react/cjs/react.development';

const {width} = Dimensions.get('screen');

const PinBlank = ({navigation}) => {
  const pinInput = React.useRef();
  const [pin, setPin] = useState('');
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
              marginTop: 30,
            }}>
            Create Secure Pin
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
              marginTop: 30,
            }}>
            Create pin that's contain 6 digits number for
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
              marginTop: 10,
            }}>
            security purpose in Zwallet.
          </Text>
          <View style={{paddingHorizontal: 50, paddingTop: 70, flexDirection: 'row'}}>
          <SmoothPinCodeInput
            ref={pinInput}
            codeLength={6}
            value={pin}
            onTextChange={(text) => setPin(text)}
            returnKeyType="send"
            // onSubmitEditing={() => onPin()}
          />
      
           
           
          
        
          </View>
          <View style={{padding: 20}}>
            <Button
              style={{
                padding: 10,
                marginTop: width / 2.2,
                backgroundColor: '#6379F4',
                borderRadius: 15,
              }}
              mode="contained"
              onPress={() => navigation.navigate('PinSuccess')}>
              Confirm
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PinBlank;
