import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveWebsite = async (key: string, website: object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(website));
  } catch (error) {
    console.error(error);
  }
};

export const fetchWebsites = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const websiteData = await Promise.all(
      keys.map(async (key) => {
        const website = await AsyncStorage.getItem(key);
        return JSON.parse(website);
      })
    );
    return websiteData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSiteData = async (key: string) => {
  try {
    const websiteData = await AsyncStorage.getItem(key);
    return JSON.parse(websiteData);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteSiteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
