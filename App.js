import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import Welcome from "./src/pages/Welcome";
import CameraScreen from "./src/pages/CameraScreen";
import LearnSignLanguage from "./src/pages/LearnSignLanguage"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="CameraScreen" component={CameraScreen} options={{headerShown: false}}/> */}
        <Stack.Screen name="LearnSignLanguage" component={LearnSignLanguage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
