// PluginItem.tsx

import React from 'react';
import { Text, View } from 'react-native';

interface PluginItemProps {
  plugin: {
    name: string;
    version: string;
    author: string;
    update_available: boolean;
    active: boolean;
  };
}

const PluginItem: React.FC<PluginItemProps> = ({ plugin }) => {
  return (
    <View className="bg-slate-600 border border-slate-500 p-2 rounded-lg mb-4">
      <Text className="text-lg text-emerald-500 border-b border-slate-100 font-bold">Name</Text>
      <Text className="text-white text-md font-bold">{plugin.name}</Text>
      <Text className="text-lg text-emerald-500 border-b border-slate-100 font-bold mt-2">Version</Text>
      <Text className="text-white text-md font-bold">{plugin.version}</Text>
      <Text className="text-lg text-emerald-500 border-b border-slate-100 font-bold mt-2">Author</Text>
      <Text className="text-white text-md font-bold">{plugin.author}</Text>
      <Text className="text-lg text-emerald-500 border-b border-slate-100 font-bold mt-2 mb-1">Update Available</Text>
      <Text className="text-lg">
        {plugin.update_available ? (
          <View className="bg-orange-600 py-2 px-3 rounded-lg">
            <Text className="text-white font-bold">Yes</Text>
          </View>
        ) : (
          <View className="bg-emerald-600 py-2 px-3 rounded-lg">
            <Text className="text-white font-bold">No</Text>
          </View>
        )}
      </Text>
      <Text className="text-lg text-emerald-500 border-b border-slate-100 font-bold mt-2 mb-1">Plugin Active</Text>
      <Text className="text-lg">
        {plugin.active ? (
          <View className="bg-emerald-600 py-2 px-3 rounded-lg">
            <Text className="text-white font-bold">Yes</Text>
          </View>
        ) : (
          <View className="bg-amber-400 py-2 px-3 rounded-lg">
            <Text className="text-white font-bold">No</Text>
          </View>
        )}
      </Text>
    </View>
  );
};

export default PluginItem;
