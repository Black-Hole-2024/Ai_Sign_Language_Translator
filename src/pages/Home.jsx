import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ImageBackground
            source={require("../../assets/image/banner.jpg")}
            style={styles.headerImage}
          >
            <View style={styles.headerOverlay}>
              <Text style={styles.headerTitle}>Sign Language Translator</Text>
              <Text style={styles.headerSubtitle}>
                Bridging communication gaps
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="hand-left-outline"
              size={30}
              color="#fff"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Sign to Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="mic-outline"
              size={30}
              color="#fff"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Sign to Voice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="text-outline"
              size={30}
              color="#fff"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Text to Sign</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon
              name="volume-high-outline"
              size={30}
              color="#fff"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Voice to Sign</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.learnButton}
            onPress={() => navigation.navigate("LearnSignLanguage")}
          >
            <Icon
              name="school-outline"
              size={30}
              color="#fff"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Learn Sign Language</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SettingsPage")}>
          <Icon name="settings-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  headerOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginTop: 10,
  },
  buttonsContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: "#333333",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  learnButton: {
    backgroundColor: "#444444",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    marginRight: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1f1f1f",
    paddingVertical: 10,
  },
});

export default Home;
