import React from 'react';
import RootStackNavigation from './navigation/RootStackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <RootStackNavigation />
    </SafeAreaProvider>
  );
}
