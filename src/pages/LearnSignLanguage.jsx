import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Video } from 'expo-av';

const LearnSignLanguage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Learn Sign Language</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Alphabet</Title>
          <Paragraph>Learn how to sign the alphabet.</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://www.lifeprint.com/asl101/images-layout/alphabet-sign-language-chart.png' }} />
        <Video
          source={{ uri: 'https://example.com/alphabet-video.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Numbers</Title>
          <Paragraph>Learn how to sign numbers.</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://example.com/numbers-image.png' }} />
        <Video
          source={{ uri: 'https://example.com/numbers-video.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Common Phrases</Title>
          <Paragraph>Learn how to sign common phrases.</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://example.com/phrases-image.png' }} />
        <Video
          source={{ uri: 'https://example.com/phrases-video.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      </Card>

      {/* Add more learning sections as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 200,
  },
});

export default LearnSignLanguage;
