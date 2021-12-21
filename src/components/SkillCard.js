import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const SkillCard = ({ skill }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.skillButton}>
            <Text style={styles.skillText}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skillButton: {
        backgroundColor: '#242121',
        marginBottom: 10,
        padding: 20,
        borderRadius: 7,
    },
    skillText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 22
    }
})

export default SkillCard