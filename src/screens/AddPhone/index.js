import React, {useState} from 'react';
import {View, Text, Image, TextInput, ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { onChangePhone } from '../../redux/actions/Users';
// import {GetUsers} from '../../redux/actions/Users';
// import {Phone} from '../../redux/actions/AddPhone';

const AddPhone = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector((s) => s.Auth);
  const [phone, setphone] = useState('');
  const [loading, setLoading] = useState(false)

  const onPhone = () =>{
    setLoading(true)
    const callbackHandler = (err, res) =>{
      setLoading(false)
      if(!err){
        ToastAndroid.show("Success add phone number", ToastAndroid.SHORT)
      }
    };
    const data = {
      phone: phone,
    }
    navigation.replace('Profile');
    dispatch(onChangePhone(data, token, callbackHandler),
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#e9eef7'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <IconButton
            icon="arrow-left"
            size={35}
            onPress={() => navigation.navigate('PersonalInformation')}
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
            Add Phone Number
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16',
            color: '#7A7886',
          }}>
          <Text>Add at least one phone number for the transfer</Text>
          <Text> ID so you can start transfering your money to</Text>
          <Text>another user.</Text>
        </View>
        <View>
          <Image
            source={require('../../Icons/phone.png')}
            style={{position: 'absolute', top: 75}}
          />
          <TextInput
            style={{
              paddingLeft: 40,
              marginTop: 70,
              height: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
              fontSize: 16,
            }}
            maxLength={12}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={(text) => setphone(text)}
            returnKeyType="send"
            onSubmitEditing={() => onPhone()}
          />
          <Button
            style={{
              marginTop: 330,
              padding: 10,
              backgroundColor: '#6379F4',
              borderRadius: 15,
            }}
            mode="contained"
            onPress={() => onPhone()}>
            Submit
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPhone;
