import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainLayout from '../../common/layouts/mainLayout';

const AccountCredentialScreen = ({ navigation }) => {

    return (
        <MainLayout>
            <Text>Account Credential</Text>
        </MainLayout>
    )
}

export default AccountCredentialScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});