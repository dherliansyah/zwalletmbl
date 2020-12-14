import React from 'react';
import {ScrollView, Text, View, BackHandler} from 'react-native';
import {TextInput, Button, IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {onLogin} from '../../redux/actions/Auth';
import {useSelector} from 'react-redux';


const Login = ({navigation}) => {
  const inputPassword = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const {token} = useSelector((s) => s.Auth);

  React.useEffect(() => {
    if(token) navigation.replace("Home")

    const backhandler = BackHandler.addEventListener("hardwareBackPress", () => BackHandler.exitApp())

    return () => backhandler.remove()
  }, [])

  const onSubmit = () => {
    setLoading(true)
    const credential = {
      email: email,
      password: password,
    }

    const callbackHandler = (err, res) => {
      // console.log(err, res)
      setLoading(false)
      if(!err)
        navigation.replace('Home') 
    }

    dispatch(onLogin(credential, callbackHandler));
  };

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
            Login
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
              marginTop: 30,
            }}>
            Login to your existing account to access
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'rgba(58, 61, 66, 0.6)',
            }}>
            all the features in Zwallet.
          </Text>
          <View style={{padding: 20}}>
            <View style={{position: 'absolute', zIndex: 2, top: 30, left: 10}}>
              <IconButton color="#444" icon="email-outline" />
            </View>
            <TextInput
              style={{
                backgroundColor: '#fff',
                marginBottom: 10,
                paddingLeft: 30,
              }}
              label="Email"
              placeholder="Enter your e-mail"
              autoCapitalize={'none'}
              onChangeText={(text) => setEmail(text)}
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
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your password"
              autoCapitalize={'none'}
              returnKeyType="send"
              secureTextEntry={true}
              onSubmitEditing={() => onSubmit()}
            />
          </View>
          <View style={{padding: 20}}>
            <Text
              style={{position: 'absolute', right: 20}}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot password?
            </Text>
          </View>
          <View style={{padding: 20}}>
            <Button
              style={{
                padding: 10,
                backgroundColor: '#6379F4',
                borderRadius: 15,
              }}
              onPress={() => loading ? null : onSubmit()}
              loading={loading}
              mode="contained">
              Login
            </Button>
          </View>
          <View>
            <Text style={{textAlign: 'center', fontSize: 16}}>
              Don't have an account? Let's{' '}
              <Text
                style={{color: '#6379F4', fontWeight: 'bold'}}
                onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
