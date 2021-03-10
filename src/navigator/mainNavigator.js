import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen23213440Navigator from '../features/BlankScreen23213440/navigator';
import BlankScreen22213439Navigator from '../features/BlankScreen22213439/navigator';
import BlankScreen21213438Navigator from '../features/BlankScreen21213438/navigator';
import BlankScreen20213437Navigator from '../features/BlankScreen20213437/navigator';
import BlankScreen19213436Navigator from '../features/BlankScreen19213436/navigator';
import BlankScreen18213435Navigator from '../features/BlankScreen18213435/navigator';
import BlankScreen17213434Navigator from '../features/BlankScreen17213434/navigator';
import BlankScreen16213433Navigator from '../features/BlankScreen16213433/navigator';
import BlankScreen15213432Navigator from '../features/BlankScreen15213432/navigator';
import BlankScreen14213431Navigator from '../features/BlankScreen14213431/navigator';
import BlankScreen13213430Navigator from '../features/BlankScreen13213430/navigator';
import BlankScreen12213429Navigator from '../features/BlankScreen12213429/navigator';
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
BlankScreen23213440: { screen: BlankScreen23213440Navigator },
BlankScreen22213439: { screen: BlankScreen22213439Navigator },
BlankScreen21213438: { screen: BlankScreen21213438Navigator },
BlankScreen20213437: { screen: BlankScreen20213437Navigator },
BlankScreen19213436: { screen: BlankScreen19213436Navigator },
BlankScreen18213435: { screen: BlankScreen18213435Navigator },
BlankScreen17213434: { screen: BlankScreen17213434Navigator },
BlankScreen16213433: { screen: BlankScreen16213433Navigator },
BlankScreen15213432: { screen: BlankScreen15213432Navigator },
BlankScreen14213431: { screen: BlankScreen14213431Navigator },
BlankScreen13213430: { screen: BlankScreen13213430Navigator },
BlankScreen12213429: { screen: BlankScreen12213429Navigator },
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
