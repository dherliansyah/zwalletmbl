import React, { useState } from 'react';
import {ScrollView, Text, View, TextInput, ActivityIndicator, ToastAndroid} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { onChangePassword } from '../../redux/actions/ChangePassword';
import { onUsers } from '../../redux/actions/Users';
// import {changePassword} from '../../redux/actions/ChangePassword';

const ChangePassword = ({navigation}) => {
  const dispatch = useDispatch();
  const inputPassword = React.useRef();
  const [password, setpassword] = React.useState('');
  const [passwordcurrent, setpasswordcurrent] = React.useState('');
  const [loading, setLoading] = useState(false);
  const {data} = useSelector((s) => s.Users);
  const {token} = useSelector((s) => s.Auth);


  const onPassword = () => {
    setLoading(true)
    const callbackHandler = (err, res) => {
      // console.log(err, res.data);
			setLoading(false);
      if(!err) {
        ToastAndroid.show("Success update password", ToastAndroid.SHORT)
        navigation.pop()
      }
		};
    const data = {
      password: password,
      currPassword: passwordcurrent,
    }
    dispatch(onChangePassword(data, token, callbackHandler),
    );
  };

  return (
    <>
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
              Change Password
            </Text>
          </View>
        </View>
        <View style={{padding: 20}}>
          <View style={{marginBottom: 30, marginTop: 20}}>
            <Text style={{fontSize: 16, color: '#7A7886'}}>
              You must enter your current password and then
            </Text>
            <Text style={{fontSize: 16, color: '#7A7886'}}>
              type your new password twice
            </Text>
          </View>
        </View>
        <View style={{padding: 20}}>
          <View style={{position: 'absolute', zIndex: 2, top: 20, left: 10}}>
            <IconButton color="#444" icon="lock-outline" />
          </View>
          <TextInput
            style={{
              paddingLeft: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
            }}
            value={passwordcurrent}
            onChangeText={(text) => setpasswordcurrent(text)}
            placeholder="Current password"
            autoCapitalize={'none'}
            returnKeyType="next"
            // secureTextEntry={true}
            onSubmitEditing={() => inputPassword.current.focus()}
          />
        </View>
        <View style={{padding: 20}}>
          <View style={{position: 'absolute', zIndex: 2, top: 20, left: 10}}>
            <IconButton color="#444" icon="lock-outline" />
          </View>
          <TextInput
            style={{
              paddingLeft: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(169, 169, 169, 0.6)',
            }}
            ref={inputPassword}
            placeholder="Enter your password"
            autoCapitalize={'none'}
            value={password}
            onChangeText={(text) => setpassword(text)}
            returnKeyType="send"
            // secureTextEntry={true}
            onSubmitEditing={() => onPassword()}
          />
        </View>
        <View style={{padding: 20}}>
          <Button
            style={{
              marginTop: 130,
              padding: 10,
              backgroundColor: '#6379F4',
              borderRadius: 15,
            }}
            mode="contained"
            loading={loading}
            onPress={() => onPassword()}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default ChangePassword;
