import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const languages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
];

const SettingsPage = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isPickerVisible, setPickerVisible] = useState(false);

  const renderLanguageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.languageItem}
      onPress={() => {
        setSelectedLanguage(item.value);
        setPickerVisible(false);
      }}
    >
      <Text style={styles.languageText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={32}
          color="#00796B"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Language Selection</Text>
        <TouchableOpacity
          style={styles.pickerContainer}
          onPress={() => setPickerVisible(true)}
        >
          <Text style={styles.pickerText}>
            {languages.find((lang) => lang.value === selectedLanguage).label}
          </Text>
        </TouchableOpacity>
        <Modal
          visible={isPickerVisible}
          transparent={true}
          animationType="fade"
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setPickerVisible(false)}
          >
            <View style={styles.modalContent}>
              <FlatList
                data={languages}
                keyExtractor={(item) => item.value}
                renderItem={renderLanguageItem}
              />
              
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Voice Integration</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            {isVoiceEnabled ? "Enabled" : "Disabled"}
          </Text>
          <Switch
            value={isVoiceEnabled}
            onValueChange={(value) => setIsVoiceEnabled(value)}
          />
        </View>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PrivacySettings")}
        >
          <Text style={styles.sectionTitle}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={() => navigation.navigate("Feedback")}>
          <Text style={styles.sectionTitle}>Feedback</Text>
        </TouchableOpacity>
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
  section: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4DB6AC",
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
  },
  pickerText: {
    fontSize: 16,
    color: "#555",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  languageItem: {
    padding: 15,
  },
  languageText: {
    fontSize: 18,
    color: "#333",
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#E57373",
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchLabel: {
    fontSize: 16,
    color: "#555",
  },
});

export default SettingsPage;
