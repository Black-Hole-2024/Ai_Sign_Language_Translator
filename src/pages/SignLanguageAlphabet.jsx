import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const alphabets = [
  { letter: 'A', image: require('../../assets/image/alphabet/A.jpg') },
  { letter: 'B', image: require('../../assets/image/alphabet/B.jpg') },
  { letter: 'C', image: require('../../assets/image/alphabet/C.jpg')},
  // Add more alphabets here...
];

const SignAlphabet = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredAlphabets = alphabets.filter(item =>
    item.letter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Alphabets..."
            placeholderTextColor="#888"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        {filteredAlphabets.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.letter}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 10,
    margin: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#333333',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
    alignItems: 'center',
    marginVertical: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width * 0.9,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e3c72',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});

export default SignAlphabet;
