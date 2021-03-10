import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen11213428Navigator from '../features/BlankScreen11213428/navigator';
import BlankScreen10213427Navigator from '../features/BlankScreen10213427/navigator';
import BlankScreen9213426Navigator from '../features/BlankScreen9213426/navigator';
import BlankScreen8213425Navigator from '../features/BlankScreen8213425/navigator';
import BlankScreen7213424Navigator from '../features/BlankScreen7213424/navigator';
import BlankScreen6213422Navigator from '../features/BlankScreen6213422/navigator';
import BlankScreen5213421Navigator from '../features/BlankScreen5213421/navigator';
import UserProfile2213262Navigator from '../features/UserProfile2213262/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen11213428: { screen: BlankScreen11213428Navigator },
BlankScreen10213427: { screen: BlankScreen10213427Navigator },
BlankScreen9213426: { screen: BlankScreen9213426Navigator },
BlankScreen8213425: { screen: BlankScreen8213425Navigator },
BlankScreen7213424: { screen: BlankScreen7213424Navigator },
BlankScreen6213422: { screen: BlankScreen6213422Navigator },
BlankScreen5213421: { screen: BlankScreen5213421Navigator },
UserProfile2213262: { screen: UserProfile2213262Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
