import React from 'react';
import { Text, View } from 'react-native';
import PluginItem from './PluginItem';

interface ApiResultProps {
  apiResult: any;
}

const ApiResult: React.FC<ApiResultProps> = ({ apiResult }) => {
  return (
    <View>
      <View className="bg-slate-600 border border-slate-500 p-2 rounded-lg">
        <Text className="text-lg text-emerald-500 border-b border-slate-100 font-bold">WordPress Version</Text>
        <Text className="text-white text-md font-bold">{apiResult.wp_version}</Text>
        <Text className="text-lg text-emerald-500 font-bold mt-2 mb-1">WordPress Update Available</Text>
        <Text className="text-white text-md font-bold">
          {apiResult.wp_update_available ? (
            <View className="bg-orange-600 py-2 px-3 rounded-lg">
              <Text className="text-white">Yes</Text>
            </View>
          ) : (
            <View className="bg-emerald-600 py-2 px-3 rounded-lg">
              <Text className="text-white">No</Text>
            </View>
          )}
        </Text>
      </View>
      <Text className="text-lg font-bold mt-4 mb-4 text-white">Plugins:</Text>
      {apiResult.plugins && apiResult.plugins.map((plugin, index) => (
        <PluginItem key={index} plugin={plugin} />
      ))}
    </View>
  );
};

export default ApiResult;
