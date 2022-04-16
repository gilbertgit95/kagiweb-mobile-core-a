import React from 'react';
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

import PrimaryTheme from '../common/themes/primary';
import AuthNav from './authNav'
  
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const RootStack = createNativeStackNavigator();

const Screens = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const ActiveTheme = isDarkMode? CombinedDarkTheme: CombinedDefaultTheme;
    const theme = merge(ActiveTheme, PrimaryTheme);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <RootStack.Screen
                        name='Auth'
                        component={AuthNav} />
                    {/* <RootStack.Screen
                        name='Auth'
                        component={} /> */}
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