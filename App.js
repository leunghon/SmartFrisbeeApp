import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Connect from './src/views/Connect.js';
import Leaderboard from './src/views/Leaderboard.js';
import Performance from './src/views/Performance.js';

const Tab = createBottomTabNavigator();

const icons = {
  Home: require('./assets/home.png'),
  Stats: require('./assets/Stats.png'),
  Groups: require('./assets/Groups.png'),
  Me: require('./assets/Me.png'),
};


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
          
            if (route.name === 'Home') {
              iconName = icons.Home;
            } else if (route.name === 'Stats') {
              iconName = icons.Stats;
            } else if (route.name === 'Groups') {
              iconName = icons.Groups;
            } else if (route.name === 'Me') {
              iconName = icons.Me;
            }
          
            // You can return any component that you like here!
            return <Image source={iconName} style={{width: size, height: size, tintColor: color}} />;
          },
          
        })}
        tabBarOptions={{
          style: {
            position: 'absolute',
            width: 320,
            height: 62,
            backgroundColor: '#FFFFFF',
            shadowColor: '#B4B4B4',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 20,
            borderRadius: 31,
            justifyContent: 'space-between',
            padding: 6,
            paddingHorizontal: 22,
          },
        }}
      >
        <Tab.Screen name="Home" component={Connect} />
        <Tab.Screen name="Stats" component={Leaderboard} />
        <Tab.Screen name="Groups" component={Leaderboard} />
        <Tab.Screen name="Me" component={Performance} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
