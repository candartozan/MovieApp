import {View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {SplashScreenProps} from '../../types/navigationTypes';
import images from '../../constants/images';
import Button from '../../components/Button';

export default function SplashScreen({navigation}: SplashScreenProps) {
  return (
    <SafeAreaView className="h-full w-full">
      <Image source={images.bb8} className="h-full w-full absolute" />
      <View className="mx-10 z-10 h-full justify-center">
        <Button
          title="Explore Movies"
          onPress={() => navigation.navigate('RootTab', {screen: 'Explore'})}
          titleClassName="text-3xl my-4"
        />
      </View>
    </SafeAreaView>
  );
}
