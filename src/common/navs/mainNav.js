import React, { useState, useContext } from 'react';
import { Appbar, Avatar, Button, IconButton, Menu, Divider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper'

import BadgeIconButton from '../buttons/badgeIconButtons';
import AvatarButton from '../buttons/avatarButton';

// import AuthContext from '../contexts/authContext';
import AsyncStorageContext from '../contexts/asyncStorageContext';
import AccountContext from '../contexts/accountContext';

const MainNav = (props) => {
    const theme = useTheme()
    // const authCtx = useContext(AuthContext)
    const asyncStoreCtx = useContext(AsyncStorageContext);
    const AccCtx = useContext(AccountContext);
    const [states, setStates] = useState({
        rightMenuOpen: false
    });

    const openMenu = () => setStates({...states, ...{rightMenuOpen: true}});
    const closeMenu = () => setStates({...states, ...{rightMenuOpen: false}});
    const onLogout = async (e) => {
        setStates({...states, ...{rightMenuOpen: false}})
        asyncStoreCtx.updateAsyncStorage({ authKey: null })
        await AccCtx.signOut()
        // setTimeout(() => {
        //     asyncStoreCtx.updateAsyncStorage({ authKey: null })
        // }, 500)
    }

    return (
        <>
            <Appbar.Header
                style={
                    !props.hasColor? {backgroundColor: theme.colors.background}: {}
                }>
                <View
                    style={{
                        ...styles.navBarActionGroup
                    }}>
                    <IconButton
                        icon="menu"
                        color={theme.colors.text}
                        size={20}
                        onPress={() => props.navigation.toggleDrawer()}/>
                </View>
                <View
                    style={{
                        ...styles.navBarActionGroup,
                        ...styles.navBarActionCenter
                    }}>
                    <AvatarButton
                        onPress={() => props.navigation.navigate('Home')}>
                        <Avatar.Image
                            size={40}
                            style={{backgroundColor: 'transparent'}}
                            source={ require('../../../assets/kagiweb.png') } />
                    </AvatarButton>
                </View>
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
                                <AvatarButton
                                    style={{
                                        backgroundColor: theme.colors.text
                                    }}
                                    size={30}
                                    text={'GC'}
                                    onPress={openMenu} />
                            )}>
                            <Menu.Item
                                onPress={() => {
                                    setStates({...states, ...{rightMenuOpen: false}})
                                    props.navigation.navigate('Account', {screen: 'AccountCredential'})
                                }}
                                icon='account-key'
                                title='Credentials' />
                            <Menu.Item
                                onPress={() => {
                                    setStates({...states, ...{rightMenuOpen: false}})
                                    props.navigation.navigate('Account', {screen: 'AccountProfile'})
                                }}
                                icon='account'
                                title='Profile' />
                            <Menu.Item
                                onPress={() => {
                                    setStates({...states, ...{rightMenuOpen: false}})
                                    props.navigation.navigate('Account', {screen: 'AccountSettings'})
                                }}
                                icon='account-cog'
                                title='Settings' />
                            <Divider />
                            <Menu.Item onPress={onLogout} icon='logout' title='Logout' />
                        </Menu>
                    </View>
                    <BadgeIconButton
                        icon="bell"
                        size={20}
                        badgeValue={3}
                        onPress={() => props.navigation.navigate('Notifications')}/>
                    <IconButton
                        icon="shield-account"
                        size={20}
                        onPress={() => props.navigation.navigate('Admin')}/>
                    
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
    navBarActionCenter: {
        alignItems: 'center'
    },
    navBarActionRight: {
        flexDirection: 'row-reverse',
    }
});