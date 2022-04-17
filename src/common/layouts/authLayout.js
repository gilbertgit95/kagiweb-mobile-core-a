import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';
import { Surface } from 'react-native-paper';
// import MainNav from '../../common/navs/mainNav'

const AuthLayout = (props) => {
    return (
        <>
            {/* app logo */}
            <View style={styles.logo}>
                <Image
                    style={styles.logoImage}
                    source={ require('../../../assets/kagiweb.png') } />
            </View>
            {
                // the main contens
                props.children? (
                    <Surface style={styles.mainContent}>
                        { props.children }
                    </Surface>
                ): null
            }
            {
                // the bottom contents
                props.footerContent? (
                    <View style={styles.footerContent}>
                        { props.footerContent }
                    </View>
                ): null
            }
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    logoImage: {
        width: 150,
        height: 150,
        backgroundColor: 'transparent'
    },
    mainContent: {
        margin: 30,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
    },
    footerContent: {
        margin: 30,
        marginTop: 0
    }
});