import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
// import {GetUsers} from '../../redux/actions/Users';

const PersonalInformation = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.Users);
  const {token} = useSelector((s) => s.Auth);

  // React.useEffect(() => {
  //   dispatch(
  //     GetUsers({
  //       idUser: token.token.idUser,
  //       token: token.token.token,
  //     }),
  //   );
  // }, []);

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
            Personal Information
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <View
          style={{
            justifyContent: 'center',
            fontSize: 16,
            color: '##7A7886',
            marginBottom: 30,
          }}>
          <Text>We got your personal information from the sign</Text>
          <Text>up process. if you want to make changes on</Text>
          <Text>your information. contact our support</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 16,
              }}>
              First Name
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 20,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {data.firstName}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 16,
              }}>
              Last Name
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 20,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {data.lastName}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 16,
              }}>
              Verified E-mail
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 10,
                fontSize: 20,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {data.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: 5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                color: '#7A7886',
                fontSize: 16,
              }}>
              Phone Number
            </Text>
            {!data.phone ? (
              <Text
                style={{
                  paddingLeft: 20,
                  paddingTop: 10,
                  color: '#6379F4',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
                onPress={() => navigation.navigate('AddPhone')}>
                Add phone number
              </Text>
            ) : (
              <Text
                style={{
                  paddingLeft: 20,
                  paddingTop: 10,
                  fontSize: 20,
                  color: '#646464',
                  fontWeight: 'bold',
                }}>
                +62 {data.phone}
              </Text>
            )}
          </View>
          {!data.phone ? (
            <Text />
          ) : (
            <Text
              style={{
                marginLeft: 'auto',
                color: '#6379F4',
                fontWeight: 'bold',
                paddingTop: 40,
                paddingRight: 20,
              }}
              onPress={() => navigation.navigate('ManagePhone')}>
              Manage
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonalInformation;
