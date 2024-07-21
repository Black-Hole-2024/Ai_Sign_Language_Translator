import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native';

const quizData = [
    {
        question: 'What does this sign represent?',
        image: require('../../assets/image/numbers/1.jpg'),
        options: [
            { key: 'A', label: 'One' },
            { key: 'B', label: 'Two' },
            { key: 'C', label: 'Three' },
        ],
        correctAnswer: 'A',
    },
    {
        question: 'What does this sign represent?',
        image: require('../../assets/image/alphabet/A.jpg'),
        options: [
            { key: 'A', label: 'letter "A" ' },
            { key: 'B', label: 'One' },
            { key: 'C', label: 'two' },
        ],
        correctAnswer: 'B',
    },
    {
        question: 'What does this sign represent?',
        image: require('../../assets/image/alphabet/B.jpg'),
        options: [
            { key: 'A', label: 'one' },
            { key: 'B', label: 'letter "B"' },
            { key: 'C', label: 'letter "c" ' },
        ],
        correctAnswer: 'C',
    },
    {
        question: 'What does this sign represent?',
        image: require('../../assets/image/numbers/0.jpg'),
        options: [
            { key: 'A', label: 'one' },
            { key: 'B', label: 'two' },
            { key: 'C', label: 'letter "C"' },
        ],
        correctAnswer: 'A',
    },
];

const QuizScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleOptionSelect = (option) => {
        if (selectedAnswer) {
            // If an option is already selected, only update score if it's correct
            if (option === quizData[currentIndex].correctAnswer) {
                setScore(score + 1);
            }
        } else {
            // Update score only if it's correct and no option was previously selected
            if (option === quizData[currentIndex].correctAnswer) {
                setScore(score + 1);
            }
        }
        setSelectedAnswer(option);

        // Move to the next question or finish the quiz
        if (currentIndex < quizData.length - 1) {
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                setSelectedAnswer(null);
            }, 1000); // Delay for feedback
        } else {
            // Show the end of quiz modal
            setModalVisible(true);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        navigation.navigate('LearnSignLanguage');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>Score: {score}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>{quizData[currentIndex].question}</Text>
                    <Image source={quizData[currentIndex].image} style={styles.questionImage} />
                </View>
                <View style={styles.optionsContainer}>
                    {quizData[currentIndex].options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.optionCard,
                                selectedAnswer === option.key && styles.selectedOption
                            ]}
                            onPress={() => handleOptionSelect(option.key)}
                        >
                            <Text style={styles.optionText}>{` ${option.key}, ${option.label}`}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Modal for end-of-quiz */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Quiz Finished!</Text>
                        <Text style={styles.modalMessage}>Your score is {score} out of {quizData.length}</Text>
                        <Pressable
                            style={styles.modalButton}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    scoreContainer: {
        backgroundColor: '#333333',
        padding: 15,
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    scrollView: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    questionContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    questionImage: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        resizeMode: 'contain',
    },
    optionsContainer: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
    },
    optionCard: {
        backgroundColor: '#333333',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        alignItems: 'center',
        margin: 10,
        padding: 10,
        width: '40%',
        justifyContent: 'center',
        height: 60,
    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    selectedOption: {
        borderWidth: 2,
        borderColor: '#1e3c72',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#333333',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        width: '80%',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#1e3c72',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default QuizScreen;
