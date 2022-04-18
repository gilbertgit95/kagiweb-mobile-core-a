import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// auth Screens
import AccCredential from './credential'
import AccProfile from './profile'
import AccSettings from './settings'

const AdminStack = createNativeStackNavigator();

const AdminNavigation = () => {
    return (
        <AdminStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <AdminStack.Screen
                name="AccountCredential"
                component={AccCredential} />
            <AdminStack.Screen
                name="AccountProfile"
                component={AccProfile} />
            <AdminStack.Screen
                name="AccountSettings"
                component={AccSettings} />
        </AdminStack.Navigator>
    )
}

export default AdminNavigation