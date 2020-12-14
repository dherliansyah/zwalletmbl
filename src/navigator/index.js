import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AddPhone,
  ChangePassword,
  // ChangePin,
  Confirmation,
  ChangePin,
  // Confirmation,
  // Details,
  // ForgotPassword,
  // History,
  Home,
  Login,
  ManagePhone,
  // Notification,
  // PinBlank,
  PinConfirmation,
  // PinSuccess,
  // ResPasswordBlank,
  Search,
  // Signup,
  PinBlank,
  // PinConfirmation,
  PinSuccess,
  Profile,
  // ResPasswordBlank,
  // Search,
  Signup,
  Success,
  Topup,
} from '../screens';
import Amount from '../screens/Amount';
// import PersonalInformation from '../screens/PersonalInformation';
// import Amount from '../screens/Amount';
import PersonalInformation from '../screens/PersonalInformation';
import messaging from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* {Auth.token.token ? ( */}
        {/* ) : ( */}
        {/* )} */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPhone"
          component={AddPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManagePhone"
          component={ManagePhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinBlank"
          component={PinBlank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinSuccess"
          component={PinSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Topup"
          component={Topup}
          options={{headerShown: false}}
        />

        {/* 

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResPasswordBlank"
          component={ResPasswordBlank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Topup"
          component={Topup}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Amount"
          component={Amount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinConfirmation"
          component={PinConfirmation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown: false}}
        />
        {/*<Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
