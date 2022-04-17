import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// auth Screens
import HomeScreen from './home'

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigation