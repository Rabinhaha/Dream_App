import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddDreamScreen from '../screens/AddDreamScreen';
import LoginScreen from '../screens/LoginScreen';

// ✅ Define your route names and params
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  AddDream: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddDream" component={AddDreamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
