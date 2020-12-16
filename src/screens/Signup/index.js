import React from 'react';
import {ScrollView, Text, ToastAndroid, View} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
// import {RegistrasiUser} from '../../redux/actions/Registrasi';

const Signup = ({navigation}) => {
  const inputPassword = React.useRef();
  const inputEmail = React.useRef();
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  // const dispatch = useDispatch();

  // const onRegistrasi = () => {
  //   if(!username){
  //     ToastAndroid.show('Input username', ToastAndroid.SHORT);
  //     return false;
  //   }
  //   if(!email){
  //     ToastAndroid.show('Input email', ToastAndroid.SHORT);
  //     return false;
  //   }
  //   if(!password){
  //     ToastAndroid.show('Input password', ToastAndroid.SHORT);
  //     return false;
  //   }

  //   let data = {
  //     username: username,
  //     email: email,
  //     password: password,
  //     pin: pin,
  //   }
  //   dispatch(RegistrasiUser(data));
  //   setusername('');
  //   setemail('');
  //   setpassword('');
  //   setpin('');
  //   navigation.navigate('PinSuccess');
  // };

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
            Sign Up
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
              marginTop: 10,
            }}>
            Create your account to access Zwallet.
          </Text>
          <View style={{padding: 20}}>
            <View style={{position: 'absolute', zIndex: 2, top: 30, left: 10}}>
              <IconButton color="#444" icon="account-outline" />
            </View>
            <TextInput
              style={{
                backgroundColor: '#fff',
                paddingLeft: 30,
              }}
              maxLength={15}
              label="Username"
              placeholder="Enter your username"
              autoCapitalize={'none'}
              value={name}
              onChangeText={(text) => setname(text)}
              returnKeyType="next"
              onSubmitEditing={() => inputEmail.current.focus()}
            />
          </View>
          <View style={{padding: 20}}>
            <View style={{position: 'absolute', zIndex: 2, top: 30, left: 10}}>
              <IconButton color="#444" icon="email-outline" />
            </View>
            <TextInput
              style={{
                backgroundColor: '#fff',
                paddingLeft: 30,
              }}
              ref={inputEmail}
              maxLength={50}
              label="Email"
              placeholder="Enter your e-mail"
              value={email}
              onChangeText={(text) => setemail(text)}
              autoCapitalize={'none'}
              returnKeyType="next"
              onSubmitEditing={() => inputPassword.current.focus()}
            />
          </View>
          <View style={{padding: 20}}>
            <View style={{position: 'absolute', zIndex: 2, top: 30, left: 10}}>
              <IconButton color="#444" icon="lock-outline" />
            </View>
            <TextInput
              ref={inputPassword}
              style={{backgroundColor: '#fff', paddingLeft: 30}}
              label="Password"
              maxLength={10}
              placeholder="Enter your password"
              autoCapitalize={'none'}
              value={password}
              onChangeText={(text) => setpassword(text)}
              returnKeyType="send"
              secureTextEntry={true}
              onSubmitEditing={() => navigation.navigate('PinBlank',{name, email, password})}
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
              onPress={() => navigation.navigate('PinBlank',{name, email, password})}>
              Sign Up
            </Button>
          </View>
          <View>
            <Text style={{textAlign: 'center', fontSize: 16}}>
              Already have an account? Let's{' '}
              <Text
                style={{color: '#6379F4', fontWeight: 'bold'}}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Signup;
