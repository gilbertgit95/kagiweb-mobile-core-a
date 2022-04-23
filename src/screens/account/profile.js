import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainLayout from '../../common/layouts/mainLayout';

const AccountProfileScreen = ({ navigation }) => {

    return (
        <MainLayout>
            <Text>Account profile</Text>
        </MainLayout>
    )
}

export default AccountProfileScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});