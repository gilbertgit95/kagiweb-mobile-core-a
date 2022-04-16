import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// auth Screens
import LoginScreen from './auth/login'
import ForgotPasswordScreen from './auth/forgotPassword'
import ResetPasswordScreen from './auth/resetPassword'

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{title: 'Sign In'}} />
            <AuthStack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{title: 'Forgot Password'}} />
            <AuthStack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={{title: 'Reset Password'}} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation