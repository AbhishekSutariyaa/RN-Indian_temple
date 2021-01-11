import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, View, Text} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import TabBar from './src/screens/TabBar';

const Stack = createStackNavigator();

const App = ({params}) => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName={'SplashScreen'}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabBar"
            component={TabBar}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
