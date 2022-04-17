import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AuthLayout from '../../common/layouts/authLayout';

const ResetPasswordScreen = ({ navigation }) => {
    const [states, setStates] = useState({
        resetCode: '',
        newPassword: '',
        retypeNewPassword: ''
    })

    return (
        <View>
            <AuthLayout
                footerContent={(
                    <>
                        <Button onPress={ () => navigation.push('ForgotPassword') }>
                            Forgot Password
                        </Button>
                        <Button onPress={ () => navigation.push('Login') }>
                            Sign In
                        </Button>
                    </>
                )}>
                <TextInput
                    style={styles.contentTextInputStyles}
                    dense={true}
                    mode='outlined'
                    label="Reset Code"
                    value={ states.resetCode }
                    onChangeText={value => {
                        setStates({...states, ...{resetCode: value}})
                    }} />
                <TextInput
                    style={styles.contentTextInputStyles}
                    dense={true}
                    mode='outlined'
                    label="New Password"
                    value={ states.newPassword }
                    onChangeText={value => {
                        setStates({...states, ...{newPassword: value}})
                    }} />
                <TextInput
                    style={styles.contentTextInputStyles}
                    dense={true}
                    mode='outlined'
                    label="Retype Password"
                    value={ states.retypeNewPassword }
                    onChangeText={value => {
                        setStates({...states, ...{ retypeNewPassword: value }})
                    }} />
                <Button
                    style={styles.buttonStyle}
                    mode='contained'
                    onPress={ () => console.log('signing in') }>
                    Reset Password
                </Button>
            </AuthLayout>
        </View>
    )
}


export default ResetPasswordScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});