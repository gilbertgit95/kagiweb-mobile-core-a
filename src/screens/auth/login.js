import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import AuthContext from '../../common/contexts/authContext';
import AuthLayout from '../../common/layouts/authLayout';

const LoginScreen = ({ navigation }) => {
    const [states, setStates] = useState({
        email: '',
        password: '',
        isSubmitLoading: false
    })
    const authCtx = useContext(AuthContext)

    const onSubmit = (e) => {
        setStates({ ...states, ...{ isSubmitLoading: true }})
        setTimeout(() => {
            setStates({ ...states, ...{ isSubmitLoading: false }})
            authCtx.setAuthContext({...authCtx, ...{ authKey: 'test_LoginAuthKey123' }})
        }, 2000)
    }

    return (
        <View>
            <AuthLayout
                footerContent={(
                    <>
                        <Button onPress={ () => navigation.push('ForgotPassword') }>
                            Forgot Password
                        </Button>
                        <Button onPress={ () => navigation.push('ResetPassword') }>
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
                <TextInput
                    style={styles.contentTextInputStyles}
                    dense={true}
                    mode='outlined'
                    label="Password"
                    value={ states.password }
                    onChangeText={value => {
                        setStates({...states, ...{ password: value }})
                    }} />
                <Button
                    disabled={states.isSubmitLoading}
                    loading={states.isSubmitLoading}
                    style={styles.buttonStyle}
                    mode='contained'
                    onPress={ onSubmit }>
                    Sign In
                </Button>
            </AuthLayout>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    contentTextInputStyles: {
        marginBottom: 10
    },
    buttonStyle: {
        marginTop: 20
    }
});