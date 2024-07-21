// CreateAccount.js
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../action/authAction"; // Adjust the path as needed

const CreateAccount = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateAccount = async () => {
    setLoading(true);
    await dispatch(signupRequest(formData));
    setLoading(false);
    navigation.navigate("Verfication")
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/welcom.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.form}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#ccc"
              value={formData.fullname}
              onChangeText={(text) => handleChange("fullname", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#ccc"
              value={formData.username}
              onChangeText={(text) => handleChange("username", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
              value={formData.email}
              onChangeText={(text) => handleChange("email", text)}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ccc"
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#ccc"
              value={formData.confirm_password}
              onChangeText={(text) => handleChange("confirm_password", text)}
              secureTextEntry
            />
            {loading ? (
              <ActivityIndicator size="large" color="#00BFFF" />
            ) : (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleCreateAccount}
                >
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                {error && <Text style={styles.errorText}>{error}</Text>}
                {user && (
                  <Text style={styles.successText}>
                    
                  </Text>
                )}
              </>
            )}
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
    backgroundColor: "rgba(31, 31, 31, 0.8)", // Semi-transparent background
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
    color: "red",
    marginVertical: 10,
  },
  successText: {
    color: "green",
    marginVertical: 10,
  },
});

export default CreateAccount;
