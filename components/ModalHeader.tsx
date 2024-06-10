import React from 'react';
import { Text, View } from 'react-native';

interface ModalHeaderProps {
  text: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ text }) => {
  return (
    <Text className="text-center text-lg text-white">{text}</Text>
  );
};

export default ModalHeader;
