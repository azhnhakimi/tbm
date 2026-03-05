import { StyleSheet, Text, View } from "react-native";

export default function CreateQuest() {
  return (
    <View style={styles.container}>
      <Text>Create Quest</Text>
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
