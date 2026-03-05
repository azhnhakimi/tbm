import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export function PrimaryGradient() {
  return (
    <LinearGradient
      colors={["#121212", "#2E1515", "#2E1515", "#121212"]}
      locations={[0, 0.3, 0.7, 1]}
      style={StyleSheet.absoluteFill}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  );
}
