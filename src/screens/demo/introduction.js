import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainLayout from '../../common/layouts/mainLayout';

const DemoIntroScreen = ({ navigation }) => {

    return (
        <MainLayout>
            <Text>Demo Introduction</Text>
        </MainLayout>
    )
}

export default DemoIntroScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});