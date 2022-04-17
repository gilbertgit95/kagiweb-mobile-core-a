import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// auth Screens
import AccCredential from './credential'
import AccProfile from './profile'

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
        </AdminStack.Navigator>
    )
}

export default AdminNavigation