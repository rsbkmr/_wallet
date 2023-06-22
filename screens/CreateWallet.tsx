import {Text, FlatList, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigation/RootStackNavigation';

export default function CreateWallet() {
  const [mnemonic, setMnemonic] = useState(
    'cheap park mind horror mad truth skin custom ankle fruit patch few',
  );
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-slate-900">
      {/* Mnemonic */}
      <View>
        <FlatList
          data={mnemonic.split(' ')}
          renderItem={({item: word, index}) => (
            <View className="flex-row" key={index}>
              <Text className="text-2xl font-bold text-gray-500">
                {index + 1}.{' '}
              </Text>
              <Text
                className="text-2xl font-bold text-black dark:text-white"
                key={index}>
                {word}
              </Text>
            </View>
          )}
        />
      </View>
      {/* Warning box */}
      <View className="p-2 mt-4 border-2 rounded border-amber-600">
        <View className="flex-row justify-center gap-x-1">
          <Text className="text-sm font-medium text-center text-amber-600">
            <Icon name="exclamation-triangle" />
          </Text>
          <Text className="text-sm font-bold text-center text-amber-600">
            Write it down on a piece of paper and keep it safe.
          </Text>
        </View>
      </View>
      {/* Create Button */}
      <View className="mt-auto">
        <Pressable
          className="p-4 bg-blue-700 border-2 border-blue-700 rounded active:opacity-50"
          onPress={() => navigation.navigate('AddWalletName')}>
          <View className="flex-row items-center justify-center gap-x-2">
            <Text className="text-base font-bold text-center text-white">
              Next
            </Text>
            <Icon name="long-arrow-alt-right" color={'white'} size={20} />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
