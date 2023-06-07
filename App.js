import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/pages/Home.js';
import LoginScreen from './src/views/pages/Login.js';
import CreateAccount from './src/views/pages/CreateAccount.js';
import Chats from './src/views/pages/Chats.js';
import NewConversation from './src/views/pages/NewConversation.js';

const Stack = createStackNavigator(); // Para navegar em telas diferentes

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
        <Stack.Screen name="NewConversation" component={NewConversation} options={{ headerShown: false }} />
      </Stack.Navigator >
    </NavigationContainer>
  );
}