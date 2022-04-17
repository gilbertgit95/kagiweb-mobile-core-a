import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Home</Text>
        </View>
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