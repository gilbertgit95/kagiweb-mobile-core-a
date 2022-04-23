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

import InitialLoadingView from '../common/views/initialLoadingView';
import AccountContext from '../common/contexts/accountContext';
import PrimaryTheme from '../common/themes/primary';
import DarkSpecific from '../common/themes/darkSpecific';
import LightSpecific from '../common/themes/lightSpecific';

import AuthNav from './authNav'
import MainContentNav from './mainContentNav'
  
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const RootStack = createNativeStackNavigator();

const Screens = () => {
    const AccCtx = useContext(AccountContext);

    const isDarkMode = useColorScheme() === 'dark';
    const ActiveTheme = isDarkMode? CombinedDarkTheme: CombinedDefaultTheme;
    let theme = merge(ActiveTheme, PrimaryTheme);

    // custom style if in darkmode or in light
    if (isDarkMode) {
        theme = merge(theme, DarkSpecific)
    } else {
        theme = merge(theme, LightSpecific)
    }

    // check for the initial user data loading
    let isInitialLoading = AccCtx.accountContext.__action === 'initialize'

    return (
        <PaperProvider theme={theme}>
            {
                isInitialLoading? (
                    <InitialLoadingView />
                ): (
                    <NavigationContainer theme={theme}>
                        <RootStack.Navigator
                            screenOptions={{
                                headerShown: false,
                                animation: 'none'
                            }}>
                            {
                                !AccCtx.accountContext.__isLoggedIn? (
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
                )
            }
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