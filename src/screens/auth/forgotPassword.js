import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AuthLayout from '../../common/layouts/authLayout';

const ForgotPasswordScreen = ({ navigation }) => {
    const [states, setStates] = useState({
        email: ''
    })

    return (
        <View>
            <AuthLayout
                footerContent={(
                    <>
                        <Button onPress={ () => navigation.push('AuthResetPassword') }>
                            Reset Password
                        </Button>
                    </>
                )}>
                <TextInput
                    style={styles.contentTextInputStyles}
                    dense={true}
                    mode='outlined'
                    label="Email"
                    value={ states.email }
                    onChangeText={value => {
                        setStates({...states, ...{email: value}})
                    }} />
                <Button
                    style={styles.buttonStyle}
                    mode='contained'
                    onPress={ () => console.log('forgot password, so send reset code') }>
                    Submit
                </Button>
            </AuthLayout>
        </View>
    )
}


export default ForgotPasswordScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});