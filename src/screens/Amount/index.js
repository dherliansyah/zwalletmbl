import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton, Button} from 'react-native-paper';
import blank from '../../Icons/blank.png';
import {URL_IMAGE} from '../../components/utils';
import {useSelector} from 'react-redux';

const Amount = ({navigation, route}) => {
  const {data} = useSelector((state) => state.Users);
  const [amount, setamount] = React.useState('');
  const [note, setnote] = React.useState('');

  return (
    <ScrollView style={{backgroundColor: '#e9eef7'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <IconButton
            icon="arrow-left"
            size={35}
            onPress={() => navigation.navigate('Search')}
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
            Transfer
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <View
          style={{
            marginBottom: 15,
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <View style={{paddingTop: 20, paddingLeft: 15}}>
            {!route?.params?.photo ? (
              <Image source={blank} style={{width: 60, height: 55}} />
            ) : (
              <Image
                style={{width: 60, height: 55}}
                source={{
                  uri: `${URL_IMAGE}/images/${route?.params?.photo}`,
                }}
              />
            )}
          </View>
          <View style={{flexDirection: 'column', flex: 9, height: 96}}>
            <Text
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                fontSize: 18,
                color: '#646464',
                fontWeight: 'bold',
              }}>
              {route.params.name}
            </Text>
            <Text style={{paddingLeft: 20, color: '#646464', fontSize: 18}}>
              +62 {route?.params?.phone}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#7C7895',
            }}>
            Rp. {data.balance} Available
          </Text>
          <TextInput
            style={{
              textAlign: 'center',
              marginTop: 70,
              color: '#6379F4',
              fontSize: 42,
              fontWeight: 'bold',
            }}
            onChangeText={(text) => setamount(text)}
            placeholder="0.00"
          />
          <Image
            source={require('../../Icons/edit-2.png')}
            style={{position: 'absolute', top: 265}}
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
            onChangeText={(text) => setnote(text)}
            placeholder="Add some notes"
          />
          <Button
            style={{
              marginTop: 80,
              padding: 10,
              backgroundColor: '#6379F4',
              borderRadius: 15,
            }}
            disabled={!amount || parseInt(amount) >= data.balance}
            mode="contained"
            onPress={() =>
              navigation.navigate('Confirmation', {
                ...route.params,
                note,
                amount,
                balance: data.balance,
              })
            }>
            Confirmation
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Amount;

const ab = {
  a: 1,
};

const ba = {
  ...ab,
  b: 2,
};
