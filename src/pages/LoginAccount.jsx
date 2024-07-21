import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../action/authAction";

const LoginAccount = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { loginLoading, loginError } = useSelector((state) => state.auth);

  const handleLoginAccount = async () => {
    if (!name || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    const userData = {
      username: name,
      password: password,
    };
    
    await dispatch(loginRequest(userData));

    // Check if there is no error before navigating
    if (!loginError) {
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/welcom.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.form}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput
              style={styles.input}
              placeholder="UserName"
              placeholderTextColor="#ccc"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ccc"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            {loginLoading ? (
              <ActivityIndicator size="large" color="#00BFFF" />
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={handleLoginAccount}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            )}
            {loginError && <Text style={styles.errorText}>{loginError}</Text>}
            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
              <Text style={styles.linkText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: 20,
  },
  form: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(31, 31, 31, 0.8)",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#00BFFF",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    color: "#00BFFF",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  errorText: {
    color: 'red',
    marginVertical: 10,
  },
});

export default LoginAccount;
