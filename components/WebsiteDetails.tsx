import React from 'react';
import { Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

interface WebsiteDetailsProps {
  webSiteName: string;
  webSiteUrl: string;
  apiKey: string;
}

const WebsiteDetails: React.FC<WebsiteDetailsProps> = ({ webSiteName, webSiteUrl, apiKey }) => {
  return (
    <View>
      <View className="flex flex-row gap-2 justify-center items-center mb-4">
        <Fontisto name="world-o" size={18} color="white" />
        <Text className="text-white font-bold text-lg">{webSiteUrl}</Text>
      </View>
      <View className="bg-slate-600 border border-slate-500 p-2 rounded-lg mb-4">
        <Text className="text-lg text-emerald-500 border-b border-slate-100 font-bold">Name</Text>
        <Text className="text-white text-md font-bold">{webSiteName}</Text>
        <Text className="text-lg text-emerald-500 font-bold mt-2">URL</Text>
        <Text className="text-white text-md font-bold">{webSiteUrl}</Text>
        <Text className="text-lg text-emerald-500 font-bold mt-2">API KEY</Text>
        <Text className="text-white text-md font-bold">{apiKey}</Text>
      </View>
    </View>
  );
};

export default WebsiteDetails;
