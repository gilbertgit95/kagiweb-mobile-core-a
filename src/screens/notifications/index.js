import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// auth Screens
import NotificationsScreen from './notifications'

const NotifsStack = createNativeStackNavigator();

const NotifsNavigation = () => {
    return (
        <NotifsStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <NotifsStack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen} />
        </NotifsStack.Navigator>
    )
}

export default NotifsNavigation