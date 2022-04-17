import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// auth Screens
import HomeNav from './home'
import DemoNav from './demo'
import AccountNav from './account'
import AdminNav from './admin'

const MainContentDrawer = createDrawerNavigator();

const MainContentNavigation = () => {
    return (
        <MainContentDrawer.Navigator>
            <MainContentDrawer.Screen
                name="Home"
                component={HomeNav} />
            <MainContentDrawer.Screen
                name="Demo"
                component={DemoNav} />
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