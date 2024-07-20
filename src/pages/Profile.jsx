import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Icon
            name="person-circle-outline"
            size={100}
            color="#fff"
            style={styles.profileIcon}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <View style={styles.cardIconContainer}>
              <Icon name="person-outline" size={30} color="#6200EE" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Personal Info</Text>
              <Text style={styles.cardSubtitle}>
                Update your personal information
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            <View style={styles.cardIconContainer}>
              <Icon name="lock-closed-outline" size={30} color="#6200EE" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Change Password</Text>
              <Text style={styles.cardSubtitle}>
                Update your account password
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("SettingsPage")}
          >
            <View style={styles.cardIconContainer}>
              <Icon name="settings-outline" size={30} color="#6200EE" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Settings</Text>
              <Text style={styles.cardSubtitle}>
                Configure your app settings
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Feedback")}
          >
            <View style={styles.cardIconContainer}>
              <Icon
                name="chatbubble-ellipses-outline"
                size={30}
                color="#6200EE"
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Feedback</Text>
              <Text style={styles.cardSubtitle}>Give us your feedback</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
          <Icon name="home-outline" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="person-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#333333",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileIcon: {
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  profileEmail: {
    fontSize: 16,
    color: "#ccc",
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: "#333333",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 5,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1f1f1f",
    paddingVertical: 10,
  },
});

export default Profile;
