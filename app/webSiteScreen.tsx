import React, { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, Text } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { deleteSiteData, getSiteData } from '@/storage/storage';
import WebsiteHeader from '@/components/WebsiteHEader';
import WebsiteDetails from '@/components/WebsiteDetails';
import ApiResult from '@/components/ApiResult';

export default function WebSiteScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  useEffect(() => {
    fetchWebsiteData();
  }, []);

  const [websiteData, setWebsiteData] = useState<any>({});
  const [apiResult, setApiResult] = useState<any>(null);

  const fetchWebsiteData = async () => {
    try {
      const webSiteData = await getSiteData(params.key);
      setWebsiteData(webSiteData);
      if (webSiteData?.apiKey) {
        fetchApiData(webSiteData.webSiteUrl, webSiteData.apiKey);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchApiData = async (webSiteUrl: string, apiKey: string) => {
    try {
      const response = await fetch(`${webSiteUrl}/wp-json/bawp/v1/info?api_key=${apiKey}`);
      const data = await response.json();
      setApiResult(data);
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: handleDelete },
      ],
      { cancelable: true }
    );
  };

  const handleDelete = async () => {
    try {
      await deleteSiteData(params.key);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView className="bg-slate-950 h-full pt-4 pb-4 px-2">
      <WebsiteHeader webSiteName={websiteData.webSiteName || ''} />
      <WebsiteDetails
        webSiteName={websiteData.webSiteName || ''}
        webSiteUrl={websiteData.webSiteUrl || ''}
        apiKey={websiteData.apiKey || ''}
      />
      {apiResult ? (
        <ApiResult apiResult={apiResult} />
      ) : (
        <Text className="text-lg text-white mb-4 text-center">Loading API data...</Text>
      )}
      <Pressable
        className="bg-red-600 py-2 border border-red-300 rounded-xl mb-10"
        onPress={confirmDelete}
      >
        <Text className="text-center text-white text-xl">Remove Website</Text>
      </Pressable>
    </ScrollView>
  );
}
