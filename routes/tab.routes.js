import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Bene from '../screens/Bene';
import Preven from '../screens/Preven';
import RegiForm from '../screens/RegiForm';
import Alertas from '../screens/Alertas';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Benefícios') iconName = 'bulb-outline';
          else if (route.name === 'Prevenções') iconName = 'shield-checkmark-outline';
          else if (route.name === 'Alertas') iconName = 'alert-circle-outline';
          else if (route.name === 'Relatório') iconName = 'document-text-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#a0a0a0',
        tabBarStyle: {
          backgroundColor: '#2c2e3a',
          height: 65,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Benefícios" component={Bene} />
      <Tab.Screen name="Prevenções" component={Preven} />
      <Tab.Screen name="Alertas" component={Alertas} />
      <Tab.Screen name="Relatório" component={RegiForm} />
    </Tab.Navigator>
  );
}
