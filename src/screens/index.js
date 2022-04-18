import React, { useContext } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

import AuthContext from '../common/contexts/authContext';
import PrimaryTheme from '../common/themes/primary';
import AuthNav from './authNav'
import MainContentNav from './mainContentNav'
  
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const RootStack = createNativeStackNavigator();

const Screens = () => {
    const authCtx = useContext(AuthContext);
    const isDarkMode = useColorScheme() === 'dark';
    const ActiveTheme = isDarkMode? CombinedDarkTheme: CombinedDefaultTheme;
    let theme = merge(ActiveTheme, PrimaryTheme);

    // custom style if in darkmode
    if (isDarkMode) {
        theme = merge(theme, {colors: {background: '#121212'}})
    }

    if (authCtx.authContext.authKey) {
        console.log('is logged in')
    } else {
        console.log('is not logged in')
    }

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animation: 'none'
                    }}>
                    {
                        !authCtx.authContext.authKey? (
                            <RootStack.Screen
                                name='Auth'
                                component={AuthNav} />
                        ): (
                            <RootStack.Screen
                                name='MainContent'
                                component={MainContentNav} />
                        )
                    }
                </RootStack.Navigator>
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