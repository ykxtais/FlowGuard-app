import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

import DrawerRoutes from './drawer.routes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
