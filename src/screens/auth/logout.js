import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Caption, Headline } from 'react-native-paper';
// import MainNav from '../../common/navs/mainNav'

const LogoutScreen = () => {
    return (
        <View>
            {/* <MainNav /> */}
            <Headline>Logout</Headline>
        </View>
    )
}

export default LogoutScreen

const styles = StyleSheet.create({
    // bottom: {
    //   position: 'absolute',
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    // },
});