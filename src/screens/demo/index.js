import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// auth Screens
import DemoIntro from './introduction'

const DemoStack = createNativeStackNavigator();

const DemoNavigation = () => {
    return (
        <DemoStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <DemoStack.Screen
                name="DemoIntro"
                component={DemoIntro} />
        </DemoStack.Navigator>
    )
}

export default DemoNavigation