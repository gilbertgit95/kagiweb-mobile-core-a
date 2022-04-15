import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrimaryTheme from '../common/themes/primary';
import MainNav from '../common/navs/mainNav'
import LoginScreen from './auth/login'
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
  
const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Stack = createNativeStackNavigator()

const Screens = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const ActiveTheme = isDarkMode? CombinedDarkTheme: CombinedDefaultTheme;
    const theme = merge(ActiveTheme, PrimaryTheme);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
                <Stack.Navigator
                    // initialRouteName="Login"
                    screenOptions={{
                        header: (props) => <MainNav {...props} />,
                    }}>
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen} />
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