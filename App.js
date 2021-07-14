import React from 'react';
import GameBoard from './components/GameBoard'
import { createBottomTabNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './redux/store'

const Tab = createBottomTabNavigator

export default function App() {
  return (
    <Provider store={store}>
      <GameBoard/>
    </Provider>
  );
}


