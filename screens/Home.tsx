import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigation/RootStackNavigation';

export default function Home() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-slate-900">
      {/* Top Buttons */}
      <View className="flex-row justify-between">
        <Pressable
          className="active:opacity-50"
          onPress={() => navigation.navigate('Transactions')}>
          <Text className="text-black dark:text-white">
            <Icon name="history" size={25} />
          </Text>
        </Pressable>
        <Pressable className="active:opacity-50">
          <Text className="text-black dark:text-white">
            <Icon name="cog" size={25} />
          </Text>
        </Pressable>
      </View>
      {/* Balance */}
      <View className="items-center justify-center flex-1">
        <Text className="text-4xl font-extrabold text-black dark:text-white">
          1000 sats
        </Text>
      </View>
      {/* Receive and Send Button */}
      <View className="flex-row gap-3">
        <Pressable
          className="p-4 bg-blue-700 border-2 border-blue-700 rounded active:opacity-50"
          onPress={() => {
            navigation.navigate('Receive');
          }}>
          <Text className="font-bold text-center text-white ">
            <Icon name="qrcode" size={25} />
          </Text>
        </Pressable>
        <Pressable
          className="flex-1 p-4 bg-blue-700 border-2 border-blue-700 rounded active:opacity-50"
          onPress={() => navigation.navigate('Scan')}>
          <Text className="text-base font-bold text-center text-white">
            Send
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
