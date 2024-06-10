import React from 'react';
import { Pressable, Text } from 'react-native';

interface ModalButtonProps {
  text: string;
  onPress: () => void;
  buttonStyle: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ text, onPress, buttonStyle }) => {
  return (
    <Pressable className={buttonStyle} onPress={onPress}>
      <Text className="text-center text-white text-xl">{text}</Text>
    </Pressable>
  );
};

export default ModalButton;
