import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainLayout from '../../common/layouts/mainLayout';

const HomeScreen = ({ navigation }) => {

    return (
        <MainLayout>
            <Text>Notifications</Text>
        </MainLayout>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});