import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TempleHome from './TempleHome';
import TempleDetails from './TempleDetails';

const Tab = createMaterialTopTabNavigator();

const TabBar = (props) => {
  return (
    <Tab.Navigator
      tabBarPosition={'top'}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="TempleHome"
        component={TempleHome}
        options={{tabBarLabel: 'Temple Home'}}
      />
      <Tab.Screen
        name="TempleDetails"
        component={TempleDetails}
        options={{tabBarLabel: 'Temple Details'}}
      />
    </Tab.Navigator>
  );
};
export default TabBar;
