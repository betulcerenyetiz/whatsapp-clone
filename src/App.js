import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{title: 'WhatsApp', headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Chat"
          options={{title: 'Chat', headerShown: false}}
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
