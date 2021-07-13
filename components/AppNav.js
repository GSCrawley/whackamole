import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

const Tab = createBottomTabNavigator

const SwitchScreen = createSwitchNavigator({
    routeOne: {Mole},
    routeTwo: GameBoard
},
{
    initialRouteName: 'Moles',
}
)

const HomeStackNavigator = createStackNavigator({
    Home: Welcome, Detail: GameBoard 
  });

const GameTabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Moles: ScreenOne,
    WhackEm: ScreenTwo,
  });  