import React from 'react'
import { Avatar } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';

const AvatarButton = (props) => {
    let properties = {}
    let customeProps = new Set(['icon', 'text', 'onPress'])
    let type = 'image'

    Object.entries(props).forEach((item) => {
        if (!customeProps.has(item[0])) properties[item[0]] = item[1]
    })

    const onPress = (e) => {
        if (props.onPress) props.onPress()
    }

    if (props.icon) {
        type = 'icon'
        properties['icon'] = props.icon

    } else if (props.text) {
        type = 'text'
        properties['label'] = props.text
    }

    const generateAvatar = (compType, compProperties) => {
       if (compType === 'icon') {
            return <Avatar.Icon { ...compProperties } />
        } else if (compType === 'text') {
            return <Avatar.Text { ...compProperties } />
        }
        return props.children
    }

    return (
        <TouchableOpacity
            onPress={onPress}>
            <View
                style={{
                    paddingLeft: 10,
                    padding: 5,
                }}>{ generateAvatar(type, properties) }</View>
        </TouchableOpacity>
    )
}

export default AvatarButton