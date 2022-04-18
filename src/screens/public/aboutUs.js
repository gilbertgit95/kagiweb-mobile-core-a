import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AboutUsScreen = ({ navigation }) => {

    return (
        <View>
            <Text>About Us</Text>
        </View>
    )
}

export default AboutUsScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});