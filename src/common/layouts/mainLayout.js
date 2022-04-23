import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Surface } from 'react-native-paper';

const MainLayout = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                { props.children }
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainLayout

const styles = StyleSheet.create({
   
});