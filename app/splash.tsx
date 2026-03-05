import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function Splash() {
  useEffect(() => {
    const checkUser = async () => {
      const onboardingDone = await AsyncStorage.getItem("onboarding_done");

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (true) {
        router.replace("/(onboarding)/onboarding");
      } else if (!session) {
        router.replace("/(auth)/login");
      } else {
        router.replace("/(tabs)");
      }
    };

    checkUser();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
