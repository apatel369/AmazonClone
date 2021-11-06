import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
    text:string;
    onPress:()=>{};
}

export default function Button({text, onPress}: ButtonProps) {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#e47911',
        margin:10,
        height:35,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        fontSize:16,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#a15e1b'      
    },
    text:{
        fontSize:16
    }
})
