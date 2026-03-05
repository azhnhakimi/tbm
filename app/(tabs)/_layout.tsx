import { Colors } from "@/constants/colors";

import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryForeground,
        tabBarInactiveTintColor: Colors.primaryGray,
        tabBarStyle: {
          backgroundColor: Colors.primaryBackground,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("@/assets/art/batman.png")}
              style={{
                width: 24,
                height: 24,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen name="quests" options={{ title: "Quests" }} />
      <Tabs.Screen name="inventory" options={{ title: "Inventory" }} />
      <Tabs.Screen name="stats" options={{ title: "Stats" }} />
      <Tabs.Screen name="character" options={{ title: "Character" }} />
    </Tabs>
  );
}
