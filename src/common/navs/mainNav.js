import React, { useState, useRef } from 'react';
import { Appbar, Avatar, IconButton } from 'react-native-paper';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper'

import BadgeIconButton from '../buttons/badgeIconButtons';
import AvatarButton from '../buttons/avatarButton';

const MainNav = (props) => {
    const theme = useTheme();

    return (
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
                <AvatarButton
                    style={{
                        backgroundColor: theme.colors.text
                    }}
                    size={30}
                    text={'GC'}
                    onPress={() => props.navigation.navigate('Account')} />
                <BadgeIconButton
                    icon="bell"
                    size={20}
                    badgeValue={3}
                    onPress={() => console.log('Pressed')}/>
                <IconButton
                    icon="shield-account"
                    size={20}
                    onPress={() => props.navigation.navigate('Admin')}/>
                
            </View>
        </Appbar.Header>
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