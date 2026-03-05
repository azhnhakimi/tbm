import { StyleSheet, Text, View } from "react-native";

export default function QuestList() {
  return (
    <View style={styles.container}>
      <Text>Quest List</Text>
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
