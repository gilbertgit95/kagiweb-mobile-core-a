import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainLayout from '../../common/layouts/mainLayout';

const AppEndpoints = ({ navigation }) => {

    return (
        <MainLayout>
            <Text>App Endpoints</Text>
        </MainLayout>
    )
}

export default AppEndpoints

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});