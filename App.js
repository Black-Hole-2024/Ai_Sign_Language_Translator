import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import Welcome from "./src/pages/Welcome";
import CameraScreen from "./src/pages/CameraScreen";
import LearnSignLanguage from "./src/pages/LearnSignLanguage"
import SettingsPage from "./src/pages/SettingsPage";
import Profile from "./src/pages/Profile"
import CreateAccount from "./src/pages/CreateAccount";
import LoginAccount from "./src/pages/LoginAccount"
import SignLanguageAlphabet from "./src/pages/SignLanguageAlphabet";
import SignNumbers from "./src/pages/SignNumbers";
import QuizScreen from "./src/pages/QuizScreenScreen";
import { Provider } from 'react-redux';
import Verfication from "./src/pages/Verfication";
import store from "./src/store";
const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LearnSignLanguage" component={LearnSignLanguage} />
        <Stack.Screen name="SettingsPage" component={SettingsPage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="LoginAccount" component={LoginAccount} />
        <Stack.Screen name="SignLanguageAlphabet" component={SignLanguageAlphabet} />
        <Stack.Screen name="SignNumbers" component={SignNumbers} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="Verfication" component={Verfication} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
