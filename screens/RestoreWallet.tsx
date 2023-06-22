import {Text, FlatList, View, Pressable, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigation/RootStackNavigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function RestoreWallet() {
  const navigation = useNavigation<RootNavigationProp>();
  const [placeholderMnemonic, setPlaceholderMnemonic] = useState(
    'cheap park mind horror mad truth skin custom ankle fruit patch few',
  );
  const [mnemonic, setMnemonic] = useState(new Array<string>(12).fill(''));
  const inputRef = useRef<(TextInput | null)[]>([]);

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-slate-900">
      {/* Mnemonic Input */}
      <View>
        <FlatList
          data={placeholderMnemonic.split(' ')}
          removeClippedSubviews={false}
          renderItem={({item: word, index}) => (
            <View className="flex-row items-center" key={index}>
              <Text className="text-2xl font-bold text-black dark:text-white">
                {index + 1}.{' '}
              </Text>
              <TextInput
                className="flex-1 p-0 text-2xl font-bold text-black dark:text-white"
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={index === 0 ? true : false}
                maxLength={8}
                returnKeyType="next"
                ref={element => (inputRef.current[index] = element)}
                onChangeText={value => {
                  setMnemonic(prevMnemonic => {
                    const newMnemonic = new Array(...prevMnemonic);
                    newMnemonic[index] = value.trim();
                    return newMnemonic;
                  });
                }}
                onSubmitEditing={() => {
                  // focus on next input
                  inputRef.current[index + 1]?.focus();
                }}
                onKeyPress={e => {
                  // focus on previous input
                  if (e.nativeEvent.key === 'Backspace' && !mnemonic[index]) {
                    if (index !== 0) {
                      inputRef.current[index - 1]?.focus();
                    }
                  }
                }}
                defaultValue={mnemonic[index]}
                onBlur={() => {}}
                blurOnSubmit={false}
                placeholder={word}
                placeholderTextColor={'grey'}
              />
            </View>
          )}
        />
      </View>
      {/* Restore Button */}
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
