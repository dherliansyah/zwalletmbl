import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { onChangePin } from '../../redux/actions/Users';

const ChangePin = ({navigation}) => {
  const pinInput = React.useRef();
  const dispatch = useDispatch();
  const [pin, setpin] = useState('');
  const {token} = useSelector((s) => s.Auth);
  const [loading, setLoading] = useState(false);

  const onPin = () => {
    setLoading(true)
    const callbackHandler = (err, res) =>{
    if(!err){
      ToastAndroid.show("Success change pin", ToastAndroid.SHORT)
    }
  };
  const data = {
    pin: pin,
  }
  navigation.replace('Profile')
  dispatch(onChangePin(data, token, callbackHandler),
  );
}

  return (
    <ScrollView style={{backgroundColor: '#e9eef7'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <IconButton
            icon="arrow-left"
            size={35}
            onPress={() => navigation.navigate('Profile')}
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
            Change PIN
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 16, color: '#7A7886'}}>
          Enter your 6 digits Zwallet PIN below to
        </Text>
        <Text style={{fontSize: 16, color: '#7A7886'}}>
          continue to the next steps.
        </Text>
        <View style={{marginTop: 70, paddingLeft: 30}}>
          <SmoothPinCodeInput
            ref={pinInput}
            codeLength={6}
            value={pin}
            onTextChange={(text) => setpin(text)}
            returnKeyType="send"
            onSubmitEditing={() => onPin()}
          />
        </View>
        <Button
          style={{
            marginTop: 300,
            padding: 10,
            backgroundColor: '#6379F4',
            borderRadius: 15,
          }}
          mode="contained"
          onPress={() => onPin()}>
          Continue
        </Button>
      </View>
    </ScrollView>
  );
};

export default ChangePin;
