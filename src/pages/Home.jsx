import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Ionicons
          name="person-circle-outline"
          size={32}
          color="#00796B"
          onPress={() => navigation.navigate("Profile")}
        />
        <Text style={styles.headerTitle}>Home</Text>
        <Ionicons
          name="settings-outline"
          size={32}
          color="#00796B"
          onPress={() => navigation.navigate("SettingsPage")}
        />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome to Sign Translator!</Text>
        <Text style={styles.introText}>
          Bridging the gap between the hearing and deaf communities.
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.card, styles.cardSignToText]}
            onPress={() => navigation.navigate("SignToText")}
          >
            <MaterialIcons name="text-fields" size={50} color="white" />
            <Text style={styles.cardText}>Sign to Text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card, styles.cardSignToVoice]}
            onPress={() => navigation.navigate("SignToVoice")}
          >
            <Ionicons name="mic-outline" size={50} color="white" />
            <Text style={styles.cardText}>Sign to Voice</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.card, styles.cardTextToSign]}
            onPress={() => navigation.navigate("TextToSign")}
          >
            <Ionicons name="language-outline" size={50} color="white" />
            <Text style={styles.cardText}>Text to Sign</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card, styles.cardLearnSignLanguage]}
            onPress={() => navigation.navigate("LearnSignLanguage")}
          >
            <Ionicons name="school-outline" size={50} color="white" />
            <Text style={styles.cardText}>Learn Sign Language</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    color: "#00796B",
    fontSize: 24,
    fontWeight: "bold",
  },
  welcome: {
    marginBottom: 50,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4DB6AC",
  },
  introText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  extraContent: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardSignToText: {
    backgroundColor: "#4DB6AC",
  },
  cardSignToVoice: {
    backgroundColor: "#9370DB",
  },
  cardTextToSign: {
    backgroundColor: "#26C6DA",
  },
  cardLearnSignLanguage: {
    backgroundColor: "#8A2BE2",
  },
  cardDailySign: {
    backgroundColor: "#BA68C8",
  },
  cardAbout: {
    backgroundColor: "#DDA0DD",
  },
  cardText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});

export default HomePage;
