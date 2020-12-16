import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

const Details = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.History);
  const {token} = useSelector((s) => s.Auth);

  return (
    <ScrollView style={{backgroundColor: '#e9eef7'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <IconButton
            icon="arrow-left"
            size={35}
            onPress={() => navigation.navigate('Home')}
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
            Transaction
          </Text>
        </View>
      </View>
      <View style={{padding: 20}}>
        <View
          style={{
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#6379F4',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 35,
            }}>
            <Image source={require('../../Icons/arrow-up.png')} />
            <Text
              style={{
                fontSize: 16,
                color: '#D0D0D0',
              }}>
              Income
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Rp. 120.000.000
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 35,
            }}>
            <Image
              style={{marginLeft: 40}}
              source={require('../../Icons/arrow-up-red.png')}
            />
            <Text
              style={{
                paddingLeft: 30,
                fontSize: 16,
                color: '#D0D0D0',
              }}>
              Expense
            </Text>
            <Text
              style={{
                paddingLeft: 30,
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Rp. 120.000
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#514F5B'}}>
            In This Week
          </Text>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 40,
              marginBottom: 40,
              fontWeight: 'bold',
              fontSize: 18,
              color: '#514F5B',
            }}>
            Bar Chart
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <View style={{flexDirection: 'column', flex: 13}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#514F5B'}}>
              Transaction History
            </Text>
          </View>
          <View style={{flex: 2}}>
            <Text
              style={{fontSize: 16, color: '#6379F4'}}
              onPress={() => navigation.navigate('History')}>
              See all
            </Text>
          </View>
        </View>
      </View>
{/* 
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: 10,
              marginBottom: 15,
            }}>
            <View style={{paddingTop: 20, paddingLeft: 15}}>
              <Image source={require('../../Icons/rectangle.png')} />
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
                {item.firstName}
              </Text>
              <Text style={{paddingLeft: 20, color: '#646464', fontSize: 18}}>
                Subcription
              </Text>
            </View>
            <View style={{flex: 7, paddingTop: 30}}>
              <Text style={{paddingLeft: 20, fontSize: 18, color: '#1EC15F'}}>
                + Rp. {item.amount}
              </Text>
            </View>
          </View>
        );
      })} */}
    </ScrollView>
  );
};

export default Details;
