import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AccountSettingsScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Account Settings</Text>
        </View>
    )
}

export default AccountSettingsScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});