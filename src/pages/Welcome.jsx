import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const pages = [
  {
    title: "Welcome to Sign Language Translator",
    content:
      "Our app helps you translate sign language into text or voice and vice versa. Learn sign language at your own pace with our interactive lessons.",
  },
  {
    title: "Key Features",
    content:
      "Sign to Text: Use your camera to translate sign language gestures into written text.\nSign to Voice: Translate sign language gestures into spoken words.\nText to Sign: Convert written text into sign language gestures.\nLearn Sign Language: Access a library of lessons to learn sign language step-by-step.",
  },
  {
    title: "How It Works",
    content:
      "Simply use your camera to capture sign language gestures. The app uses advanced AI to recognize and translate the gestures in real-time. You can also type or speak to see the corresponding sign language.",
  },
  {
    title: "Get Started",
    content:
      "Bridging communication gaps",
  },
];

const Welcome = ({ navigation }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = React.useRef(null);

  const handleNext = () => {
    const nextIndex = Math.min(pageIndex + 1, pages.length - 1);
    setPageIndex(nextIndex);
    scrollRef.current.scrollTo({ x: nextIndex * width, animated: true });
  };

  const handlePrevious = () => {
    const prevIndex = Math.max(pageIndex - 1, 0);
    setPageIndex(prevIndex);
    scrollRef.current.scrollTo({ x: prevIndex * width, animated: true });
  };

  const skipIntro = () => {
    setPageIndex(pages.length - 1);
    scrollRef.current.scrollTo({
      x: (pages.length - 1) * width,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/welcom.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.skipButton} onPress={skipIntro}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
          >
            {pages.map((page, index) => (
              <View key={index} style={styles.page}>
                <Text style={styles.title}>{page.title}</Text>
                <Text style={styles.content}>{page.content}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.navigationContainer}>
            {pageIndex > 0 && (
              <TouchableOpacity
                onPress={handlePrevious}
                style={styles.navButton}
              >
                <Icon name="chevron-back-outline" size={30} color="#fff" />
              </TouchableOpacity>
            )}
            {pageIndex < pages.length - 1 && (
              <TouchableOpacity onPress={handleNext} style={styles.navButton}>
                <Icon name="chevron-forward-outline" size={30} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
          {pageIndex === pages.length - 1 && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateAccount")}
                style={styles.linkContainer}
              >
                <Text style={styles.linkText}>Create an Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginAccount")}
                style={styles.linkContainer}
              >
                <Text style={styles.linkText}>Have an Account Already</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "sans-serif-medium",
  },
  content: {
    fontSize: 18,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "sans-serif",
  },
  skipButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  skipButtonText: {
    color: "#fff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  scrollView: {
    flexDirection: "row",
  },
  page: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navigationContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  navButton: {
    padding: 10,
  },
  linkContainer: {
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    color: "#00BFFF",
    textDecorationLine: "underline",
    alignSelf: "center",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#00BFFF",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Welcome;
