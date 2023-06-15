import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from '../screens/Home';

export type RootNavigationList = {
  Home: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootNavigationList>;

const Root = createNativeStackNavigator<RootNavigationList>();

export default function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="Home" component={Home} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
