import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('TabBar');
    }, 1000);
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../assets/temple.png')}></Image>
    </View>
  );
};

export default SplashScreen;