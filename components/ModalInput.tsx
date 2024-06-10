import React from 'react';
import { TextInput } from 'react-native';

interface ModalInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const ModalInput: React.FC<ModalInputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      className="bg-slate-300 text-black text-lg px-2 py-3 rounded-lg border border-slate-500 mb-4"
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default ModalInput;
