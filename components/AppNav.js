import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import GameBoard from './GameBoard'
import MoleScreen from './MoleScreen'

const SwitcScreenNavigator = createSwitchNavigator({
    routeOne: MoleScreen,
    routeTwo: GameBoard
},
{
    initialRouteName: MoleScreen,
}
)

const HomeStackNavigator = createStackNavigator({
    Home: Welcome, Detail: GameBoard 
  });

const GameTabNavigator = createBottomTabNavigator({
    Home: Welcome,
    Moles: MoleScreen,
    WhackEm: GameBoard,
  });  
  
export default { SwitchScreenNavigator, HomeStackNavigator, GameTabNavigator }
