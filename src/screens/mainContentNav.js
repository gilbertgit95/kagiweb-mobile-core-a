import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper'

import MainNav from '../common/navs/mainNav'
// auth Screens
import HomeNav from './home'
import DemoNav from './demo'
import NotifsNav from './notifications'
import AccountNav from './account'
import AdminNav from './admin'

const MainContentDrawer = createDrawerNavigator();

const MainContentNavigation = () => {
    const theme = useTheme()

    return (
        <MainContentDrawer.Navigator
            screenOptions={{
                header: (props) =>  <MainNav hasColor={true} { ...props } />,
                drawerStyle: {
                    // backgroundColor: theme.colors.primary,
                },
                drawerItemStyle: {
                    alignContent: 'flex-end',
                    // backgroundColor: 'red',
                },
                // drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: 'transparent',

                // drawerInactiveTintColor: theme.colors.text,
                drawerInactiveBackgroundColor: 'transparent'
            }}>
            <MainContentDrawer.Screen
                name="Home"
                component={HomeNav} />
            <MainContentDrawer.Screen
                name="Demo"
                component={DemoNav} />
            <MainContentDrawer.Screen
                name="Notifications"
                component={NotifsNav}
                options={{
                    drawerItemStyle: { display: 'none' }
                }} />
            <MainContentDrawer.Screen
                name="Account"
                component={AccountNav}
                options={{
                    drawerItemStyle: { display: 'none' }
                }} />
            <MainContentDrawer.Screen
                name="Admin"
                component={AdminNav}
                options={{
                    drawerItemStyle: { display: 'none' }
                }} />
        </MainContentDrawer.Navigator>
    )
}

export default MainContentNavigation