import {View, TextInput} from 'react-native';
import React from 'react';

type Props = {
  value: string;
  onChangeText?: (text: string) => void;
};

const SearchBar = ({value, onChangeText}: Props) => {
  return (
    <View className="mt-5">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search"
        placeholderTextColor={'white'}
        className="text-white text-xl border border-gray-500 rounded-lg"
      />
    </View>
  );
};

export default SearchBar;
