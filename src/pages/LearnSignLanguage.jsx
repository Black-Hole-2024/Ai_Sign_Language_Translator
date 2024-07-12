import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LearnSignLanguage = ({ navigation }) => {
  const lessons = [
    { title: "Alphabet", icon: "alphabetical" },
    { title: "Numbers", icon: "numeric" },
    { title: "Common Phrases", icon: "chatbox-outline" },
    { title: "Daily Conversations", icon: "people-outline" },
    { title: "Advanced Topics", icon: "school-outline" },
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={32}
          color="#00796B"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Learn Sign Language</Text>
      </View>
      <View style={styles.main}>
        {lessons.map((lesson, index) => (
          <TouchableOpacity
            key={index}
            style={styles.lessonCard}
            onPress={() => navigation.navigate("Lesson", { title: lesson.title })}
          >
            <Ionicons name={lesson.icon} size={40} color="white" />
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
          </TouchableOpacity>
        ))}
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
  main: {
    flex: 1,
  },
  lessonCard: {
    backgroundColor: "#4DB6AC",
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginLeft: 20,
  },
});

export default LearnSignLanguage;
