import React from "react";
import { Pressable, Text, View } from "react-native";

interface WebsiteItemProps {
  webSiteName: string;
  webSiteUrl: string;
  onPress: () => void;
}

const WebsiteItem: React.FC<WebsiteItemProps> = ({ webSiteName, webSiteUrl, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View className="flex flex-row p-2 mb-4 rounded-lg bg-slate-600 border border-slate-500">
        <View className="bg-emerald-500 w-12 h-12 rounded-lg mr-3 items-center justify-center">
          <Text className="text-white text-xl font-bold">
            {webSiteName.substr(0, 1).toUpperCase()}
          </Text>
        </View>
        <View className="gap-0.5 justify-center">
          <Text className="text-white text-lg font-bold">{webSiteName}</Text>
          <Text className="text-white">{webSiteUrl}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default WebsiteItem;