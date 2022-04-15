import React from 'react'
import { IconButton, Badge } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';

const BadgeIconButton = (props) => {
    let properties = {}
    let badgeValue = props.badgeValue
    let customeProps = new Set(['badgeValue', 'onPress'])

    Object.entries(props).forEach((item) => {
        if (!customeProps.has(item[0])) properties[item[0]] = item[1]
    })

    const onPress = (e) => {
        if (props.onPress) props.onPress()
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <IconButton { ...properties } />
            {
                Boolean(badgeValue)? (
                    <Badge style={styles.badge}>{ badgeValue }</Badge>
                ): null
            }
        </TouchableOpacity>
    )
}

export default BadgeIconButton

const styles = StyleSheet.create({
    badge: {
        position: 'absolute'
    }
});