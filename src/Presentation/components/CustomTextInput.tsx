import React from 'react'
import { StyleSheet, View,TextInput, KeyboardType, Text } from 'react-native'

interface Props{
    label: string,
    placeholder: string,
    keyboardType: KeyboardType,
    value: string,
    property: string,
    secureTextEntry?: boolean,
    onChangeText:(property: string, value: any) => void
}

export const CustomTextInput = ({
    label, placeholder, keyboardType, value, property,
    secureTextEntry = false, onChangeText
}: Props) => {
  return (
    <View style={sytles.frmInput}>
        <Text style={sytles.txtLabel}>{ label }</Text>
        <TextInput
            style={sytles.txtForm}
            placeholder={ placeholder }
            keyboardType={ keyboardType }
            secureTextEntry={ secureTextEntry }
            value={ value }
            onChangeText={ text => onChangeText(property, text) } 
        />
    </View>
  )
}
// Criando CSS para a View e texto
const sytles = StyleSheet.create({
    frmInput:{
        flexDirection: 'column',
        marginTop:30,
    },
    txtLabel:{
        fontSize: 14,
        fontWeight: 'bold' 
    },
    txtForm:{
        width: '100%',
        padding: 5,
        paddingLeft: 25,
        fontSize: 14,
        borderColor: '#aaa',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 25,
    },
});
