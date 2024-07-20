import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsPage = () => {
  const [showLanguages, setShowLanguages] = useState(false); // State to track if languages are expanded

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingItem} onPress={toggleLanguages}>
          <Icon name="language-outline" size={24} color="#FFC300" style={styles.settingIcon} />
          <Text style={styles.settingText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="volume-high-outline" size={24} color="#58D68D" style={styles.settingIcon} />
          <Text style={styles.settingText}>Sound</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="information-circle-outline" size={24} color="#EC7063" style={styles.settingIcon} />
          <Text style={styles.settingText}>About</Text>
        </TouchableOpacity>
      </View>
      
      {/* Language Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLanguages}
        onRequestClose={() => {
          toggleLanguages(); // Close modal on Android back button press
        }}
      >
        <TouchableWithoutFeedback onPress={toggleLanguages}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.languageItem}>
            <Text style={styles.languageText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageItem}>
            <Text style={styles.languageText}>Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languageItem}>
            <Text style={styles.languageText}>French</Text>
          </TouchableOpacity>
          {/* Add more languages as needed */}
        </View>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingsList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingIcon: {
    marginRight: 20,
  },
  settingText: {
    fontSize: 20,
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#2c2c2c',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  languageItem: {
    paddingVertical: 10,
  },
  languageText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SettingsPage;
