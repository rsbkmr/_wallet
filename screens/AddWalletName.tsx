import {View, Text, Pressable, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigation/RootStackNavigation';

export default function AddWalletName() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-slate-900">
      {/* Text Input */}
      <View className="justify-center flex-1">
        <Text className="text-xl text-black dark:text-white font-bold mb-2">
          Enter your wallet's name.
        </Text>
        <TextInput
          placeholder="e.g. Rishabh's Wallet"
          placeholderTextColor={'grey'}
          autoCorrect={false}
          className="border w-full p-4 rounded bg-white text-black border-blue-700"
        />
      </View>
      {/* Buttons */}
      <View>
        <Pressable
          className="p-4 bg-blue-700 border-2 border-blue-700 rounded active:opacity-50"
          onPress={() => navigation.navigate('Home')}>
          <Text className="text-base font-bold text-center text-white">
            Add wallet
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
