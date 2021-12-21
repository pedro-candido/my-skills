/* eslint-disable react/prop-types */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.addButton} onPress={onPress} >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#3085c9',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default Button