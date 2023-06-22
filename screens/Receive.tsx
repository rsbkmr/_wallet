import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Share,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useColorScheme} from 'nativewind';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../navigation/RootStackNavigation';

export default function Receive() {
  const navigation = useNavigation<RootNavigationProp>();
  const {width} = useWindowDimensions();
  const {colorScheme} = useColorScheme();
  const [addressOrInvoice, setAddressOrInvoice] = useState(
    'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  );
  const [qrValue, setQrValue] = useState(
    'bitcoin:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  );

  const onShare = async () => {
    try {
      await Share.share({
        message: addressOrInvoice,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const onCopy = () => {
    Clipboard.setString(addressOrInvoice);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-slate-900">
      {/* Top Buttons */}
      <View className="flex-row mb-4">
        <Pressable
          className="active:opacity-50"
          onPress={() => navigation.goBack()}>
          <Text className="text-black dark:text-white">
            <Icon name="long-arrow-alt-left" size={25} />
          </Text>
        </Pressable>
      </View>
      {/* QR */}
      <View>
        <Pressable className="active:opacity-50" onPress={onCopy}>
          <QRCode
            backgroundColor="white"
            size={width - 32}
            quietZone={colorScheme === 'dark' ? 16 : 0}
            value={qrValue}
          />
        </Pressable>
      </View>
      {/* Address or Invoice */}
      <View>
        <Pressable
          className="flex-row justify-center mt-8 text-center gap-x-2 items-top active:opacity-50"
          onPress={onCopy}>
          <Text className="text-lg text-black dark:text-white">
            {addressOrInvoice.slice(0, 4)}...{addressOrInvoice.slice(-4)}
          </Text>
          <Text className="text-lg text-black dark:text-white">
            <Icon name="copy" size={16} />
          </Text>
        </Pressable>
      </View>
      {/* Share Button */}
      <View className="flex-1">
        <Pressable
          className="p-4 mt-auto bg-blue-700 border-2 border-blue-700 rounded active:opacity-50"
          onPress={onShare}>
          <Text className="text-base font-bold text-center text-white">
            Share
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
