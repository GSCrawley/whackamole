import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import MoleScreen from './MoleScreen'
import GameBoard from './GameBoard'

const Tab = createBottomTabNavigator

const SwitcScreenNavigator = createSwitchNavigator({
    routeOne: {Mole},
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
    Home: HomeStack,
    Moles: MoleScreen,
    WhackEm: ScreenTwo,
  });  
  
export default { SwitchScreenNavigator, HomeStackNavigator, GameTabNavigator }
