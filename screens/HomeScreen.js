import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Guide</Text>
      
      {/* Paris Butonu: place ve rating verilerini gönderir [cite: 107, 108] */}
      <Button
        title="Go to Paris"
        onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
      />

      {/* London Butonu: place ve rating verilerini gönderir [cite: 112, 113] */}
      <Button
        title="Go to London"
        onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10, // Butonlar arası boşluk
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});