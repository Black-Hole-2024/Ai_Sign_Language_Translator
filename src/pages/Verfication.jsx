import React, { useState, useEffect } from "react";
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
import { VerficationRequest } from "../action/authAction";

const Verification = ({ navigation }) => {
  const dispatch = useDispatch();
  const { VerficationUser, VerficationError, verficationLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    verification_code: ""
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleVerification = async () => {
    dispatch(VerficationRequest(formData));
  };

  useEffect(() => {
    if (VerficationUser && !VerficationError) {
      navigation.navigate("Home");
    }
  }, [VerficationUser, VerficationError]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/welcom.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.form}>
            <Text style={styles.title}>Verify your Account</Text>
            <TextInput
              style={styles.input}
              placeholder="UserName"
              placeholderTextColor="#ccc"
              value={formData.username}
              onChangeText={(text) => handleChange("username", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Verification Code"
              placeholderTextColor="#ccc"
              value={formData.verification_code}
              onChangeText={(text) => handleChange("verification_code", text)}
              secureTextEntry
            />
            {verficationLoading ? (
              <ActivityIndicator size="large" color="#00BFFF" />
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={handleVerification}
              >
                <Text style={styles.buttonText}>Verify</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
              <Text style={styles.linkText}>Back</Text>
            </TouchableOpacity>
            {VerficationError && <Text style={styles.errorText}>{VerficationError}</Text>}
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
    color: 'red',
    marginVertical: 10,
  },
});

export default Verification;
