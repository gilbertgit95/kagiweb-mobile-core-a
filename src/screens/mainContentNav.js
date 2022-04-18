import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainNav from '../common/navs/mainNav'
// auth Screens
import HomeNav from './home'
import DemoNav from './demo'
import NotifsNav from './notifications'
import AccountNav from './account'
import AdminNav from './admin'

const MainContentDrawer = createDrawerNavigator();

const MainContentNavigation = () => {
    return (
        <MainContentDrawer.Navigator
            screenOptions={{
                header: (props) =>  <MainNav hasColor={true} { ...props } />
            }}
            >
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