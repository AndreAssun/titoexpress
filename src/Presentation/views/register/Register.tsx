// import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TextInput, Button, ToastAndroid, ImageBackground } from 'react-native';
import { RouderdButton } from '../../../Presentation/components/RouderdButton'
import { RadioButton } from 'react-native-paper';


import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { RouderdButton } from '../../../Presentation/components/RouderdButton'
import { CustomTextInput } from '../../../Presentation/components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import RegisterViewModel from './ViewModel';

export const RegisterScreen = () => {


    const [checked, setChecked] = React.useState('first');
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { email, senha, nome, sobrenome, 
        onChange, register } = RegisterViewModel();


    return (
   

        <ImageBackground
            style={styles.fundo}
            source={require('../../../../assets/layout/bg-signup.png')}
            resizeMode="cover">

            <Image
                style={styles.logo}
                source={require('../../../../assets/layout/logo.png')} />

            <View style={styles.form}>
                <CustomTextInput
                    label='Nome'
                    placeholder='Digite seu Nome'
                    keyboardType='default'
                    value={nome}
                    property='nome'
                    onChangeText={onChange}
                />
                <CustomTextInput
                    label='Sobrenome'
                    placeholder='Digite seu Sobrenome'
                    keyboardType='default'
                    value={sobrenome}
                    property='sobrenome'
                    onChangeText={onChange}
                />
                
                <CustomTextInput
                    label='E-mail'
                    placeholder='Digite seu E-mail'
                    keyboardType='email-address'
                    value={email}
                    property='email'
                    onChangeText={onChange}
                />
                <CustomTextInput
                    label='Senha'
                    placeholder='Digite sua Senha'
                    keyboardType='default'
                    secureTextEntry={true}
                    value={senha}
                    property='senha'
                    onChangeText={onChange}
                />
                
                <View>
                    <View style={styles.container}>
                        <RadioButton
                            value="cliente"
                            status={checked === 'cliente' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('cliente')}
                        />
                        <Text style={styles.texto}>Cliente</Text>
                        <RadioButton
                            value="vendedor"
                            status={checked === 'vendedor' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('vendedor')}
                        />
                        <Text style={styles.texto}>Vendedor</Text>
                        <RadioButton
                            value="entregador"
                            status={checked === 'entregador' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('entregador')}
                        />
                        <Text style={styles.texto}>Entregador</Text>
                    </View>
                </View>
                <RouderdButton

                    lblButton="Cadastrar"
                    onPress={() => register() }

                />

                <Text style={{ alignSelf: 'center', marginTop: 25 }}>Já sou cadastrado!</Text>

            </View>


        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        opacity: 0.9
    },

    logo: {
        marginTop: '15%',
        alignSelf: 'center'

    },
    form: {
        marginHorizontal: 20,
        marginTop: '1%',
    },
    frmInput: {
        marginBottom: 20,
    },
    txtLabel: {
        fontSize: 16,

    },
    txteForm: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 20,
        backgroundColor: '#fff'

    },
    container: {
        // 
        alignSelf: 'center',
        marginTop: 15,
        padding: '5%',
        flexDirection: 'row'
    },
    texto: {
        marginTop: 7,
    }



})