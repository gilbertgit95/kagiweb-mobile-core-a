import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// auth Screens
import AppSettings from './appSettings'
import AppUsers from './appUsers'

const AdminStack = createNativeStackNavigator();

const AdminNavigation = () => {
    return (
        <AdminStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <AdminStack.Screen
                name="AppSettings"
                component={AppSettings} />
            <AdminStack.Screen
                name="AppUsers"
                component={AppUsers} />
        </AdminStack.Navigator>
    )
}

export default AdminNavigation