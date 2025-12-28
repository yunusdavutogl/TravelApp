import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Gelen parametreleri parçalıyoruz (Destructuring) [cite: 116]
  const { place, rating } = route.params;

  return (
    <View style={styles.container}>
      {/* Gelen veriyi ekranda gösteriyoruz [cite: 117] */}
      <Text style={styles.title}>Welcome to {place}</Text>
      <Text style={styles.ratingText}>Rating: {rating} / 5 Stars</Text>

      {/* Bölüm 3 Challenge: 5 yıldız kontrolü  */}
      {rating === 5 ? (
        <Text style={styles.specialMessage}>🌟 This is a top-rated destination! 🌟</Text>
      ) : (
        <Text style={styles.normalMessage}>A great place to visit.</Text>
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: 18,
    marginVertical: 10,
  },
  specialMessage: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 16,
  },
  normalMessage: {
    color: 'gray',
  },
});