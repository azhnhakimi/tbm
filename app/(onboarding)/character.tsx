import { StyleSheet, Text, View } from "react-native";

const CreateCharacter = () => {
  return (
    <View style={styles.container}>
      <Text>Create Character</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CreateCharacter;
