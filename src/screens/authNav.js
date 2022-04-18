import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNav from '../common/navs/authNav'
// auth Screens
import LoginScreen from './auth/login'
import ForgotPasswordScreen from './auth/forgotPassword'
import ResetPasswordScreen from './auth/resetPassword'

// public screen
import NewsScreen from './public/news';
import AboutUsScreen from './public/aboutUs';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                header: (props) =>  <AuthNav { ...props } />,
                animation: 'none'
            }}>
            {/* auth screen */}
            <AuthStack.Screen
                name="Login"
                component={LoginScreen} />
            <AuthStack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen} />
            <AuthStack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen} />

            {/* public screen */}
            <AuthStack.Screen
                name="News"
                component={NewsScreen} />
            <AuthStack.Screen
                name="AboutUs"
                component={AboutUsScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation