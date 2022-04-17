import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AccountProfileScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Account profile</Text>
        </View>
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