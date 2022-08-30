import * as React from 'react';
import GameBoard from './components/GameBoard';
import ChooseMole from './components/ChooseMole';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { Ionicon } from  'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if ( route.name === 'Home') {
              iconName = focused
              ? 'hammer-outline' : 'hammer'
          } else if ( route.name === 'Moles') {
              iconName = focused
              ? 'body-outline' : 'body'
            }
            return <Ionicon name={iconName} size={size} color={color} />;
          },
        })}
    >
        <Tab.Screen name="Home" component={GameBoard} />
        <Tab.Screen name="Moles" component={ChooseMole} />
        {/* <Tab.Screen name="Home" component={<Text>Hello World</Text>} />
        <Tab.Screen name="Moles" component={<Text>Hello</Text>} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}


