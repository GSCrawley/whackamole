
import { createBottomTabNavigator } from 'react-navigation-tabs';

import GameBoard from './GameBoard'
import ChooseMole from './ChooseMole'

// const Whacked = createSwitchNavigator({
//     routeOne: ChooseMole,
//     routeTwo: GameBoard
// }
// )

// const WhackStack = createStackNavigator();

// const Whacked = () => {
//   return (
//     <NavigationContainer>
//     </NavigationContainer>
//   )
// }

const GameTabNavigator = createBottomTabNavigator({
    Home: GameBoard,
    Moles: ChooseMole
  });  
  
export default { GameTabNavigator }
