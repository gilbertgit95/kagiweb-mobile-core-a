import React from 'react';
import { Appbar, Button, IconButton, Badge } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from 'react-native-paper'

const MainNav = () => {
    const theme = useTheme()

    return (
        <Appbar.Header>
            <View
                style={{
                    ...styles.navBarActionGroup
                }}>
                <IconButton
                    icon="menu"
                    color={theme.colors.text}
                    size={20}
                    onPress={() => console.log('Pressed')}/>
            </View>
            <View
                style={{
                    ...styles.navBarActionGroup,
                    ...styles.navBarActionCenter
                }}>
                <IconButton
                    icon="camera"
                    size={20}
                    onPress={() => console.log('Pressed')}/>
            </View>
            <View
                style={{
                    ...styles.navBarActionGroup,
                    ...styles.navBarActionRight
                }}>
                <IconButton
                    icon="shield-account"
                    size={20}
                    onPress={() => console.log('Pressed')}/>
                
                <IconButton
                    icon="bell"
                    size={20}
                    onPress={() => console.log('Pressed')}/>
                <IconButton
                    icon="camera"
                    size={20}
                    onPress={() => console.log('Pressed')}/>
            </View>
        </Appbar.Header>
    )
}

export default MainNav

const styles = StyleSheet.create({
    navBarActionGroup: {
        flexDirection: 'row',
        width: '33%'
    },
    navBarActionCenter: {
        alignItems: 'center'
    },
    navBarActionRight: {
        alignItems: 'flex-end'
    }
});