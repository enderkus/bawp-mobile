import { Stack, router } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#059669' },
      headerTintColor: '#fff',
    }}>
      <Stack.Screen name="index" options={{ title: "BAWP" }} />
      <Stack.Screen name="modal" options={{presentation:"modal", title: "Add Website" }} />
      <Stack.Screen name="webSiteScreen" options={{title:"Detail"}} />
    </Stack>
  );
}
