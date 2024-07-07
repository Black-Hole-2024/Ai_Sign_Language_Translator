import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Avatar
        rounded
        title="A"
        size="medium"
        overlayContainerStyle={{ backgroundColor: '#800080' }} // Dark purple color
      />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Header</Text>
        <Text style={styles.subheader}>Subhead</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF4FF', // Light purple background color
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  textContainer: {
    marginLeft: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subheader: {
    fontSize: 14,
    color: '#666',
  },
});

export default CustomButton;
