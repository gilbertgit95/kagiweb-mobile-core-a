import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Headline, Subheading, ProgressBar, useTheme } from 'react-native-paper';

const AuthLayout = (props) => {
    let theme = useTheme()

    return (
        <SafeAreaView
            style={{
                backgroundColor: theme.colors.background
            }}>
            <ScrollView
                contentContainerStyle={{
                    height: '100%',
                    width: '100%'
                }}>
                <View
                    Style={styles.centered}>
                    {/* app logo */}
                    <View style={styles.logo}>
                        <Image
                            style={styles.logoImage}
                            source={ require('../../../assets/kagiweb.png') } />
                        <Headline>kagiweb</Headline>
                    </View>
                    <View style={styles.progress}>
                        <ProgressBar indeterminate={true} />
                    </View>
                    <View style={styles.centered}>
                        <Subheading>Loading initial user data</Subheading>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AuthLayout

const styles = StyleSheet.create({
    logo: {
        marginTop: '10%',
        alignItems: 'center'
    },
    logoImage: {
        width: 150,
        height: 150,
        backgroundColor: 'transparent'
    },
    centered: {
        flexDirection:'column',
        alignItems:'center'
    },
    progress: {
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: '10%',
        paddingRight: '10%'
    }
});