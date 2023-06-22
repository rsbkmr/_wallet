import React from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Start from '../screens/Start';
import CreateWallet from '../screens/CreateWallet';
import RestoreWallet from '../screens/RestoreWallet';
import Home from '../screens/Home';
import Receive from '../screens/Receive';
import Scan from '../screens/Scan';

export type RootNavigationList = {
  Start: undefined;
  CreateWallet: undefined;
  RestoreWallet: undefined;
  Home: undefined;
  Receive: undefined;
  Scan: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootNavigationList>;

const Root = createNativeStackNavigator<RootNavigationList>();

export default function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="Start" component={Start} />
        <Root.Screen name="CreateWallet" component={CreateWallet} />
        <Root.Screen name="RestoreWallet" component={RestoreWallet} />
        <Root.Screen name="Home" component={Home} />
        <Root.Screen name="Receive" component={Receive} />
        <Root.Screen name="Scan" component={Scan} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
