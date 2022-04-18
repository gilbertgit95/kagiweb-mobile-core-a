import React, { useState, useContext } from 'react';
import { Appbar, useTheme, Avatar, Button, IconButton, Menu, Divider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import BadgeIconButton from '../buttons/badgeIconButtons';
import AvatarButton from '../buttons/avatarButton';

import AuthContext from '../contexts/authContext';

const MainNav = (props) => {
    const theme = useTheme()
    const authCtx = useContext(AuthContext)
    const [states, setStates] = useState({
        rightMenuOpen: false
    })

    const openMenu = () => setStates({...states, ...{rightMenuOpen: true}});
    const closeMenu = () => setStates({...states, ...{rightMenuOpen: false}});
    const onLogout = (e) => {
        setStates({...states, ...{rightMenuOpen: false}})
        setTimeout(() => {
            authCtx.setAuthContext({...authCtx, ...{ authKey: null }})
        }, 500)
    }

    return (
        <>
            <Appbar.Header
                style={
                    !props.hasColor? {backgroundColor: theme.colors.background}: {}
                }>
                <View
                    style={{
                        ...styles.navBarActionGroup,
                        ...styles.navBarActionRight
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <Menu
                            style={{width: '50%', marginTop: 40}}
                            visible={states.rightMenuOpen}
                            onDismiss={closeMenu}
                            anchor={(
                                <IconButton
                                    icon="menu"
                                    color={theme.colors.text}
                                    size={20}
                                    onPress={openMenu}/>
                            )}>
                            <Menu.Item
                                onPress={() => {
                                    setStates({...states, ...{rightMenuOpen: false}})
                                    props.navigation.navigate('Login')
                                }}
                                icon='login'
                                title='Sign In' />
                            <Divider />
                            <Menu.Item
                                onPress={() => {
                                    setStates({...states, ...{rightMenuOpen: false}})
                                    console.log('action 1')
                                }}
                                icon='cactus'
                                title='Action 1' />
                            <Menu.Item
                                onPress={() => {
                                    setStates({...states, ...{rightMenuOpen: false}})
                                    console.log('action 2')
                                }}
                                icon='airplane'
                                title='Action 2' />
                            <Menu.Item
                                onPress={() => {
                                    setStates({...states, ...{rightMenuOpen: false}})
                                    console.log('action 3')
                                }}
                                icon='tractor'
                                title='Action 3' />
                        </Menu>
                    </View>
                    <Button
                        onPress={() => props.navigation.navigate('News')}>
                        News
                    </Button>
                    <Button
                        onPress={() => props.navigation.navigate('AboutUs')}>
                        About Us
                    </Button>
                    
                </View>
            </Appbar.Header>
        </>
    )
}

export default MainNav

const styles = StyleSheet.create({
    navBarActionGroup: {
        flexDirection: 'row',
        flex: 1
    },
    navBarActionRight: {
        flexDirection: 'row-reverse',
    }
});