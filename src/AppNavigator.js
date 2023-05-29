import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connect from './views/Connect';
import Leaderboard from './views/Leaderboard';
import Performance from './views/Performance';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connect">
        <Stack.Screen name="Connect" component={Connect} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Performance" component={Performance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
