import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// auth Screens
import AppSettings from './appSettings'
import AppEndpoints from './appEndpoints'
import AppRoles from './appRoles'
import AppRoleEndpoints from './appRoleEndpoints'
import AppUsers from './appUsers'

// const AdminStack = createNativeStackNavigator();
const AdminBottomTab = createMaterialBottomTabNavigator();

const AdminNavigation = () => {
    return (
        <AdminBottomTab.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <AdminBottomTab.Screen
                name="AppSettings"
                options={{
                    title: 'Settings',
                    tabBarIcon: () => <Icon name='cog' size={20} />
                }}
                component={AppSettings} />
            <AdminBottomTab.Screen
                name="AppEndpoints"
                options={{
                    title: 'Endpoints',
                    tabBarIcon: () => <Icon name='link' size={20} />
                }}
                component={AppEndpoints} />
            <AdminBottomTab.Screen
                name="AppRoles"
                options={{
                    title: 'Roles',
                    tabBarIcon: () => <Icon name='universal-access' size={20} />
                }}
                component={AppRoles} />
            <AdminBottomTab.Screen
                name="AppRoleEndpoints"
                options={{
                    title: 'Access',
                    tabBarIcon: () => <Icon name='key' size={20} />
                }}
                component={AppRoleEndpoints} />
            <AdminBottomTab.Screen
                name="AppUsers"
                options={{
                    title: 'Users',
                    tabBarIcon: () => <Icon name='users' size={15} />
                }}
                component={AppUsers} />
        </AdminBottomTab.Navigator>
    )
}

export default AdminNavigation