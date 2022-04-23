import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

// import AuthContext from '../../common/contexts/authContext';
import AccountContext from '../../common/contexts/accountContext';
import AsyncStorageContext from '../../common/contexts/asyncStorageContext';
import AuthLayout from '../../common/layouts/authLayout';

const LoginScreen = ({ navigation }) => {
    const AccCtx = useContext(AccountContext)
    const [states, setStates] = useState({
        email: '',
        password: '',
        isSubmitLoading: false
    })
    // const authCtx = useContext(AuthContext)
    const asyncStoreCtx = useContext(AsyncStorageContext);

    const onSubmit = async (e) => {
        setStates({ ...states, ...{ isSubmitLoading: true }})
        await AccCtx.signIn(
            {
                username: states.email,
                password: states.password
            },
            (data, err) => {
                if (!err) {
                    setStates({ ...states, ...{ isSubmitLoading: false }})
                    asyncStoreCtx.updateAsyncStorage(data)
                }
            }
        )
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