import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { router } from "expo-router";
import { saveWebsite } from "@/storage/storage";
import ModalHeader from "@/components/ModalHeader";
import ModalInput from "@/components/ModalInput";
import ModalButton from "@/components/ModalButton";

export default function AppModal() {
  const [webSiteName, setWebSiteName] = useState("");
  const [webSiteUrl, setWebsiteUrl] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSave = () => {
    saveWebsite(webSiteName, { webSiteName, webSiteUrl, apiKey });
    setWebSiteName("");
    setWebsiteUrl("");
    setApiKey("");
    router.back();
  };

  return (
    <ScrollView className="bg-slate-950 h-full p-3">
      <ModalHeader text="Please enter your website name, url and valid BAWP API key." />
      <View className=" flex gap-4 mt-2">
        <View>
          <ModalInput
            placeholder="Website Name"
            value={webSiteName}
            onChangeText={setWebSiteName}
          />
          <ModalInput
            placeholder="Website URL (only base)"
            value={webSiteUrl}
            onChangeText={setWebsiteUrl}
          />
          <ModalInput
            placeholder="BAWP API key"
            value={apiKey}
            onChangeText={setApiKey}
          />
        </View>

        <View>
          <ModalButton
            text="Save Website"
            onPress={handleSave}
            buttonStyle="bg-emerald-600 py-2 border border-emerald-300 rounded-xl"
          />
          <ModalButton
            text="Close"
            onPress={() => router.back()}
            buttonStyle="bg-red-600 py-2 border border-red-300 rounded-xl mt-4"
          />
        </View>
      </View>
    </ScrollView>
  );
}
