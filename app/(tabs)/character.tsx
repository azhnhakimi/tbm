import { StyleSheet, Text, View } from "react-native";

export default function Character() {
  return (
    <View style={styles.container}>
      <Text>Character</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
