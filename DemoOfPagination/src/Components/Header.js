import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Header = ({screen}) => {
  const navigation = useNavigation();
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const key1 = await AsyncStorage.getItem('ARRAY');
    key2 = JSON.parse(key1);
    console.log('hello from home', key2);
  };

  return (
    <View
      style={{
        backgroundColor: 'Grey',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
      }}>
      {screen === 'Cart' && (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon1 name="arrowleft" style={{fontSize: 25}} />
        </Pressable>
      )}

     {screen === 'Signup' && (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon1 name="arrowleft" style={{fontSize: 25}} />
        </Pressable>
      )}

      <Text>{screen}</Text>
      {screen === 'Home' && (
        <View style={{flexDirection: 'row'}}>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Icon name="shopping-cart" style={{fontSize: 25}}></Icon>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Header;
