import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

interface Props{
    onPress: () => void,
    lblButton: string
}

export const RouderdButton = ( {onPress, lblButton}:Props ) =>{
    return(
        <TouchableOpacity
            style={styles.roudedButton}
            onPress={() => onPress()}
        >
            <Text style={styles.lblButton}>{ lblButton }</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    roudedButton:{
        width:'100%',
        height:40,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    lblButton:{
        color: '#fff',
        fontWeight: 'bold'
    },
})