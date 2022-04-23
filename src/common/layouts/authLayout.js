import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Surface, Headline } from 'react-native-paper';

const AuthLayout = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                {/* app logo */}
                <View style={styles.logo}>
                    <Image
                        style={styles.logoImage}
                        source={ require('../../../assets/kagiweb.png') } />
                    <Headline>kagiweb</Headline>
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
            </ScrollView>
        </SafeAreaView>
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
        backgroundColor: 'transparent'
    },
    footerContent: {
        margin: 30,
        marginTop: 0
    }
});