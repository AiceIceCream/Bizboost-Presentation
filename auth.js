import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Login, Register, Welcome, Home } from "./Components";
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageScreen from "./screens/MessageScreen";
import NotificationScreen from "./screens/NotificationScreen";
import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfile from "./screens/EditProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Profile () {
  return (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
  );
    }
function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
          headerTitle: "Bizboost",
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="chatbox" size={size} color={color} />
          ),
          headerTitle: "Bizboost", // Set your header title here
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: "Post",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-add-circle" size={size} color={color} />
          ),
          headerTitle: "Bizboost", // Set your header title here
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ),
          headerTitle: "Bizboost", // Set your header title here
        }}
        
      />
    </Tab.Navigator>
  );
}

function WelcomeScreen(){
    return(
    <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

function Auth(props){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Auth;