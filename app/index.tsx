import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Pressable, Text } from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { fetchWebsites } from "@/storage/storage";
import StorageWebsites from "@/components/StorageWebsites";

export default function Index() {
  const [storageWebsites, setStorageWebSites] = useState([]);

  useEffect(() => {
    fetchWebsitesData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchWebsitesData();
    }, [])
  );

  const fetchWebsitesData = async () => {
    try {
      const websiteData = await fetchWebsites();
      setStorageWebSites(websiteData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView className="px-2 bg-slate-950 pt-5">
      <Pressable className="bg-emerald-600 py-2 border border-emerald-300 rounded-xl mb-5">
        <Link href="/modal" className="text-center text-white text-xl">
          Add Website
        </Link>
      </Pressable>

      <StorageWebsites storageWebsites={storageWebsites} />
    </ScrollView>
  );
}
