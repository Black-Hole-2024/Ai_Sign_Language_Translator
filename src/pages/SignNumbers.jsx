import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const numbers = [
    { number: '1', image: require('../../assets/image/numbers/0.jpg') },
    { number: '2', image: require('../../assets/image/numbers/1.jpg') },
    { number: '3', image: require('../../assets/image/numbers/2.jpg') },
    // Add more numbers here...
];

const SignNumbers = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNumbers = numbers.filter(item =>
        item.number.includes(searchQuery)
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Numbers..."
                    placeholderTextColor="#888"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {filteredNumbers.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.text}>{item.number}</Text>
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
        width: '90%',
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

export default SignNumbers;
