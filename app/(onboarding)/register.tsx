import AuthForm from "@components/auth-form";
import { StyleSheet, View } from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <AuthForm />
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
export default Register;
