import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const DemoIntroScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Demo Introduction</Text>
        </View>
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