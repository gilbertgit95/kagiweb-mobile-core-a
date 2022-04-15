import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrimaryTheme from '../common/themes/primary';
import MainNav from '../common/navs/mainNav'

import {
    useColorScheme
} from 'react-native';

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

// auth Screens
import LoginScreen from './auth/login'
import LogoutScreen from './auth/logout'
import ForgotPasswordScreen from './auth/forgotPassword'
import ResetPasswordScreen from './auth/resetPassword'
  
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createNativeStackNavigator();

const Screens = () => {
    // const route = useRoute()
    const isDarkMode = useColorScheme() === 'dark';
    const ActiveTheme = isDarkMode? CombinedDarkTheme: CombinedDefaultTheme;
    const theme = merge(ActiveTheme, PrimaryTheme);

    // console.log('current router: ', route.name);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    initialRouteName="AuthLogin"
                    screenOptions={{
                        header: (props) => {
                            return (
                                <MainNav hasColor={true} {...props} />
                            )
                        },
                    }}>
                    {/* auth screens */}
                    <Stack.Screen
                        name="AuthLogin"
                        component={LoginScreen} />
                    <Stack.Screen
                        name="AuthLogout"
                        component={LogoutScreen} />
                    <Stack.Screen
                        name="AuthForgotPassword"
                        component={ForgotPasswordScreen} />
                    <Stack.Screen
                        name="AuthResetPassword"
                        component={ResetPasswordScreen} />

                    {/* core screens */}
                    {/* core account screens */}
                    {/* core admin screens */}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

export default Screens

const styles = StyleSheet.create({
    // bottom: {
    //   position: 'absolute',
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    // },
});