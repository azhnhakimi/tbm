import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="quests" />
      <Tabs.Screen name="inventory" />
      <Tabs.Screen name="stats" />
      <Tabs.Screen name="character" />
    </Tabs>
  );
}
