import {View, Text, StyleSheet, Linking, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';

export default function Scan() {
  const devices = useCameraDevices();
  const device = devices.back;
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();

      if (cameraPermission === 'not-determined') {
        await Camera.requestCameraPermission();
      }

      if (cameraPermission === 'denied') {
        await Linking.openSettings();
      }
    })();
  }, []);

  if (device == null) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
      {barcodes.map((barcode, idx) => console.log(barcode.displayValue, idx))}
      <View className="items-center justify-center flex-1">
        <View className="w-48 h-48 border-8 border-blue-600 border-dashed opacity-50 rounded-3xl" />
      </View>
      <Pressable className="p-4 pressed:opacity-50">
        <Text className="text-base text-white">Cancel</Text>
      </Pressable>
    </>
  );
}
