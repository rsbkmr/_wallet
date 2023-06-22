import {View, Text, Pressable, ScrollView} from 'react-native';
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
      {/* Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-1 flex-row gap-x-4">
          <View className="mt-4 h-52 w-80 p-6 bg-blue-200 dark:bg-blue-900 rounded border border-blue-700">
            <Text className="text-5xl font-bold text-blue-600 dark:text-blue-300">
              1000 sats
            </Text>
            <View className="mt-auto flex-row justify-between items-end">
              <Text className="text-2xl text-blue-600 dark:text-blue-300 font-medium">
                Rishabh Kumar
              </Text>
              <Text className="text-blue-600 dark:text-blue-300">
                <Icon name="bitcoin" size={50} />
              </Text>
            </View>
          </View>
          <Pressable className="mt-4 h-52 w-80 p-6 bg-blue-200 dark:bg-blue-900 rounded border border-blue-700 active:opacity-50">
            <View className="flex-1 justify-center items-center">
              <Text className="text-blue-600 dark:text-blue-300">
                <Icon name="plus" size={50} />
              </Text>
              <Text className="text-blue-600 dark:text-blue-300 font-bold text-2xl mt-2">
                Add Wallet
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
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
