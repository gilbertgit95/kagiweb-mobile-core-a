import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AppSettings = ({ navigation }) => {

    return (
        <View>
            <Text>App Settings</Text>
        </View>
    )
}

export default AppSettings

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});