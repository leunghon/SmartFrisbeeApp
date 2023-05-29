import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Leaderboard = () => {
  return (
    <View style={styles.container}>
      <Text>Leaderboard Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Leaderboard;
