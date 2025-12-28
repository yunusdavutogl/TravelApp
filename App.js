import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // İkonları içeri aktar

// Ekranları içeri aktar
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Stack Navigator'ı özelleştirme (Header stili)
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' }, // Başlık arka plan rengi
        headerTintColor: '#fff', // Başlık yazı rengi
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// 2. Ana App bileşeni (Tab Navigator ikonları ve renkleri)
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Stack Header'ı ile çakışmaması için
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Route ismine göre ikon belirleme
            if (route.name === 'Explore') {
              iconName = focused ? 'map' : 'map-outline'; //
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'; //
            }

            // İkonu döndür
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // Aktif sekme rengi
          tabBarInactiveTintColor: 'gray', // Pasif sekme rengi
        })}
      >
        <Tab.Screen name="Explore" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}