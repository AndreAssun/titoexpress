import React from 'react';
import { StyleSheet, TextInput, View, KeyboardType } from 'react-native';

interface Props {
  keyboardType: KeyboardType,
  value: string,
  property: string,
  secureTextEntry?: boolean,
  onChangeText: (property: string, value: any) => void
}

export const Input = ({
  keyboardType, value, property, secureTextEntry = false, onChangeText
}: Props) => {
  return (
    <View>
      <TextInput style={styles.input}
        keyboardType={keyboardType}
        value={value}
        //property={property}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(property, text)}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#272D2F',
    marginBottom: 16,
  },
})