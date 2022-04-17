import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Caption } from 'react-native-paper';
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
                        <Button onPress={ () => navigation.push('ResetPassword') }>
                            Reset Password
                        </Button>
                        <Button onPress={ () => navigation.push('Login') }>
                            Sign In
                        </Button>
                    </>
                )}>
                <Caption>
                    A reset Token will be sent to this address.
                    Please use the token within 5 minutes.
                </Caption>
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
                    Forgot Password
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