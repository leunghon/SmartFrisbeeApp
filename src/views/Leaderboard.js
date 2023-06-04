import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// sample data
const players = [
  { id: '1', name: 'Player 1', score: 100 },
  { id: '2', name: 'Player 2', score: 80 },
  { id: '3', name: 'Player 3', score: 60 },
  // ...more players
];

export default function Leaderboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
  },
  score: {
    fontSize: 18,
  },
});
