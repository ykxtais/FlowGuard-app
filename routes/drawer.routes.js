import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from './tab.routes';
import Bene from '../screens/Bene';
import Preven from '../screens/Preven';
import Alertas from '../screens/Alertas';
import RegiForm from '../screens/RegiForm';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2c2e3a',
        },
        headerTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#bdbdbd',
          width: 220,
        },
        drawerActiveTintColor: '#2c2e3a',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen name="Início" component={TabRoutes} />
      <Drawer.Screen name="Benefícios" component={Bene} />
      <Drawer.Screen name="Prevenções" component={Preven} />
      <Drawer.Screen name="Alertas" component={Alertas} />
      <Drawer.Screen name="Relatório" component={RegiForm} />
    </Drawer.Navigator>
  );
}
