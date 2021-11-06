import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const QuantitySelector = ({ quantity, setQuantity }) => {
    function onMinus() {
        setQuantity(Math.max(0, quantity - 1))
    }

    function onPlus() {
        setQuantity(quantity + 1)
    }

    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={onPlus} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

export default QuantitySelector

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        justifyContent: 'space-between',
        width: 130

    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1'
    },
    buttonText: {
        fontSize: 18
    },
    quantity: {
        color: '#007eb9'
    }
})
