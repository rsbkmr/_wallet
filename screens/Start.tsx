import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigation/RootStackNavigation';

export default function Start() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-slate-900">
      {/* Header */}
      <View className="items-center justify-center flex-1">
        <Text className="text-blue-700">
          <Icon name="wallet" size={100} />
        </Text>
        <Text className="text-2xl font-semibold mt-7 text-slate-500">
          Your everyday bitcoin wallet.
        </Text>
      </View>
      {/* Buttons */}
      <View>
        <Pressable
          className="p-4 mb-4 bg-blue-700 border-2 border-blue-700 rounded active:opacity-50"
          onPress={() => navigation.navigate('CreateWallet')}>
          <Text className="text-base font-bold text-center text-white">
            Create a new wallet
          </Text>
        </Pressable>
        <Pressable
          className="p-4 bg-transparent border-2 border-blue-700 rounded active:opacity-50"
          onPress={() => navigation.navigate('RestoreWallet')}>
          <Text className="text-base font-bold text-center text-black font-bosld dark:text-white">
            Restore existing wallet
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
