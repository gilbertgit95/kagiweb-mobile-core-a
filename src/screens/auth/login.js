import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AuthLayout from './components/authLayout';

const LoginScreen = ({ navigation }) => {
    const [states, setStates] = useState({
        email: '',
        password: ''
    })

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
                    style={styles.buttonStyle}
                    mode='contained'
                    onPress={ () => console.log('signing in') }>
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