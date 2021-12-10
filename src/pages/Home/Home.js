import React from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Pedro
            </Text>
            <TextInput
                style={styles.input}
                placeholder={'Type your skill'}
                placeholderTextColor={'#fff'}
            />
            <TouchableOpacity
                style={styles.addButton}
                activeOpacity={.7}
            >
                <Text style={styles.text}>
                    Add
                </Text>
            </TouchableOpacity>
            <Text style={[styles.title, { marginTop: 20 }]}>
                My skills
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        paddingHorizontal: 30,
        backgroundColor: '#101210',
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
        marginBottom: 20
    },
    addButton: {
        backgroundColor: '#3085c9',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 8
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        padding: 15,
        backgroundColor: '#242121',
        marginBottom: 15,
        borderRadius: 5,
        color: '#fff'
    }
})

export default Home