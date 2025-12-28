import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Ekranları içeri aktar
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Navigator nesnelerini oluştur [cite: 80, 148]
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Önce Stack Navigator'ı ayrı bir fonksiyon olarak tanımla [cite: 138]
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// 2. Ana App bileşeninde Tab Navigator'ı kullan 
export default function App() {
  return (
    <NavigationContainer>
      {/* headerShown: false sekme başlığının, stack başlığıyla çakışmasını önler [cite: 157] */}
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Explore" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}