import React from "react";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import WebsiteItem from "./WebSiteItem";

interface StorageWebsitesProps {
  storageWebsites: Array<{ webSiteName: string; webSiteUrl: string }>;
}

const StorageWebsites: React.FC<StorageWebsitesProps> = ({ storageWebsites }) => {
  const route = useRouter();

  const handleClick = (key: string) => {
    route.push({ pathname: "/webSiteScreen", params: { key: key } });
  };

  return (
    <FlatList
      data={storageWebsites}
      renderItem={({ item }) => (
        <WebsiteItem
          webSiteName={item.webSiteName}
          webSiteUrl={item.webSiteUrl}
          onPress={() => handleClick(item.webSiteName)}
        />
      )}
    />
  );
};

export default StorageWebsites;