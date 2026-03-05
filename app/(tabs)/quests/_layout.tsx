import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TopTabs = createMaterialTopTabNavigator();
const Tabs = withLayoutContext(TopTabs.Navigator);

export default function QuestsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen name="quest-list" />
        <Tabs.Screen name="create-quest" />
        <Tabs.Screen name="focus-mode" />
      </Tabs>
    </SafeAreaView>
  );
}
