import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainLayout from '../../common/layouts/mainLayout';

const AppRoles = ({ navigation }) => {

    return (
        <MainLayout>
            <Text>App Roles</Text>
        </MainLayout>
    )
}

export default AppRoles

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});