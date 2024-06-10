import React from 'react';
import { Text, View } from 'react-native';

interface WebsiteHeaderProps {
  webSiteName: string;
}

const WebsiteHeader: React.FC<WebsiteHeaderProps> = ({ webSiteName }) => {
  return (
    <View className="bg-emerald-500 w-12 h-12 rounded-lg mr-3 items-center justify-center self-center mb-2">
      <Text className="text-white text-2xl font-bold">
        {webSiteName.substring(0, 1).toUpperCase()}
      </Text>
    </View>
  );
};

export default WebsiteHeader;
