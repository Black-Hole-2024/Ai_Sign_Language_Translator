import React from "react";
import { View, Text, StyleSheet, ImageBackground ,Button} from "react-native";
// import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/image/HomeScreenBg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          ENGBABA
        </Text>
        <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum
        </Text>
        <Button
        
          title="Get Started"
          onPress={() => navigation.navigate('/Home')} // Replace 'NextScreen' with the actual screen you want to navigate to
          color="#800080"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%', // Or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "black", // Adjust the color to ensure it is visible over the background
  },
  button: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    fontSize: 18,
  },
  customButton: {
    backgroundColor: "#800080", // Dark purple color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default HomeScreen;
