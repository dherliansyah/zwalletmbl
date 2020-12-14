import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton, Button, TextInput} from 'react-native-paper';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useSelector, useDispatch} from 'react-redux';
import {onTransfer} from '../../redux/actions/Transfer';

const {width} = Dimensions.get('screen');

const PinConfirmation = ({navigation, route}) => {
  const pinInput = React.useRef();
  const [pin, setpin] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {token} = useSelector((state) => state.Auth);
  const {data} = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  const {phone, amount, note} = route.params;
  // navigation.navigate('Success')
  const transfer = () => {
    setLoading(true);
    console.log(token);
    const post = {
      pin,
      phone_receiver: phone,
      amount,
      note,
      sender: data.name,
      photo_sender: data.photo,
    };
    const callbackHandler = (err, res) => {
      setLoading(false);
      // console.log(err, res)
      if (!err) navigation.replace('Success', route.params);
    };

    dispatch(onTransfer(post, token, callbackHandler));
  };

  return (
    <ScrollView style={{backgroundColor: '#e9eef7'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <IconButton
            icon="arrow-left"
            size={35}
            onPress={() => navigation.navigate('Confirmation')}
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
            Enter Your PIN
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 16, color: '#7A7886'}}>
          Enter your 6 digits PIN for confirmation to
        </Text>
        <Text style={{fontSize: 16, color: '#7A7886'}}>
          continue transfering money.
        </Text>
        <View
          style={{
            marginTop: 70,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <SmoothPinCodeInput
            ref={pinInput}
            codeLength={6}
            value={pin}
            onTextChange={(text) => setpin(text)}
            returnKeyType="send"
            // onSubmitEditing={() => onPinSubmit()}
          />
        </View>
        <Button
          style={{
            marginTop: width / 1.1,
            padding: 10,
            backgroundColor: '#6379F4',
            borderRadius: 15,
          }}
          mode="contained"
          disabled={loading}
          loading={loading}
          onPress={transfer}>
          Transfer Now
        </Button>
      </View>
    </ScrollView>
  );
};

export default PinConfirmation;
