import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Connect = () => {
  return (
    <View style={styles.container}>
      <Text>Connect Page</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Connect to Frisbee</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default Connect;
