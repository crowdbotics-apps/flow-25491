import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import NotificationList222392Navigator from '../features/NotificationList222392/navigator';
import Settings222391Navigator from '../features/Settings222391/navigator';
import Settings222383Navigator from '../features/Settings222383/navigator';
import UserProfile222381Navigator from '../features/UserProfile222381/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
NotificationList222392: { screen: NotificationList222392Navigator },
Settings222391: { screen: Settings222391Navigator },
Settings222383: { screen: Settings222383Navigator },
UserProfile222381: { screen: UserProfile222381Navigator },

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
