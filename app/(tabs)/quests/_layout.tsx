import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TopTabs = createMaterialTopTabNavigator();
const Tabs = withLayoutContext(TopTabs.Navigator);

export default function QuestsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Tabs>
        <Tabs.Screen name="quest-list" options={{ title: "Quest List" }} />
        <Tabs.Screen name="create-quest" options={{ title: "Create Quest" }} />
        <Tabs.Screen name="focus-mode" options={{ title: "Focus Mode" }} />
      </Tabs>
    </SafeAreaView>
  );
}
