import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, ToastAndroid, TouchableOpacity} from 'react-native';
import { RouderdButton } from '../../../Presentation/components/RouderdButton';
import { CustomTextInput } from '../../../Presentation/components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import HomeViewModel from './ViewModel';


export const HomeScreen = () => {
 
    const { email, senha, onChange, register } = HomeViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return(
        <View style={sytles.todo}>
            {/* Comentario de Código*/}
            <Image 
                style={sytles.logoImg}
                source={require('../../../../assets/layout/logo.png')}
            />
            {/*Criando o formulario de login*/}
            <View style={sytles.form}>
                {/*Utilizando Componente de Input*/}
                <CustomTextInput
                    label='E-mail'
                    placeholder="Digite seu email!"
                    keyboardType='email-address'
                    value={email}
                    property='email'
                    onChangeText={ onChange }
                />

                <CustomTextInput
                    label='Senha'
                    placeholder="Digite sua senha!"
                    keyboardType='default'
                    secureTextEntry={ true }
                    value={senha}
                    property='senha'
                    onChangeText={ onChange }
                />

                <View style={{marginTop:30}}>
                    <RouderdButton lblButton='Entrar' onPress={ () => register() }/>
                </View>
                
                <View>
                    <Text>
                        Não tem conta? Registre-se
                        <TouchableOpacity
                            onPress={ () => navigation.navigate('RegisterScreen')}
                        >
                            <Text>Agora!</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    );
}
// Criando CSS para a View e texto
const sytles = StyleSheet.create({
    todo:{
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f2f1',
    },
    logoImg:{
        alignSelf: 'center',
        marginTop: '20%',
    },
    form:{
        width: '100%',
        height: '50%',
        padding: 30,
        position:'absolute',
        bottom: 0,
    },
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