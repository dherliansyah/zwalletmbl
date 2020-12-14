import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton, Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
// import {GetUsers} from '../../redux/actions/Users';

const AddPhone = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.Users);
  const {token} = useSelector((s) => s.Auth);


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
        <View />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 20,
              fontSize: 20,
              color: '#4D4B57',
              fontWeight: 'bold',
            }}>
            Manage Phone Number
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          fontSize: 16,
          color: '##7A7886',
          marginBottom: 30,
        }}>
        <View
          style={{
            fontSize: 16,
            color: '##7A7886',
            marginBottom: 30,
            marginTop: 30,
          }}>
          <Text style={{textAlign: 'center'}}>
            You can only delete the phone number and then
          </Text>
          <Text style={{textAlign: 'center'}}>
            you must add another phone number.
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
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
              Primary
            </Text>
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
          </View>
          <IconButton
            style={{paddingTop: 12}}
            color={Colors.red500}
            icon="trash-can-outline"
            size={50}
            onPress={() => navigation.navigate('AddPhone')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPhone;
