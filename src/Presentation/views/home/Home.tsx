import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ToastAndroid, TouchableOpacity, ImageBackground } from 'react-native';
import { RouderdButton } from '../../Presentation/components/RouderdButton';
import { CustomTextInput } from '../../../src/Presentation/components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParomList } from '../../../App';
import HomeViewModel from './ViewModel';


export const HomeScreen = () => {

    const { email, senha, onChange, register } = HomeViewModel();
    //const [email, setEmail] = useState('');
    //const [senha, setSenha] = useState('');



    const navigation = useNavigation<StackNavigationProp<RootStackParomList>>();

    return (
        <ImageBackground source={require('../../../assets/layout/comida.jpg')} resizeMode="cover">

            <View style={styles.todo}>
                {/* Comentario de Código*/}
                <Image
                    style={styles.logoImg}
                    source={require('../../../assets/layout/logo.png')}
                />

                {/*Criando O formulario de Login */}

                <View style={styles.form}>
                    <CustomTextInput
                        label='email'
                        placeholder="Digite seu Email"
                        keyboardType='email-address'
                        value={email}
                        property='email'
                        onChangeText={onChange} 
                        />

                    <CustomTextInput
                        label='senha'
                        placeholder="Digite seu Senha"
                        keyboardType='default'
                        secureTextEntry={true}
                        value={senha}
                        property='senha'
                        onChangeText={onChange}
                        />



                        <View style={{ marginTop: 30 }}>
                            <Button title='Entrar' color='#f00' onPress={() => {
                                register()
                            }}></Button>

                        </View>

                        <View>
                            <Text>
                                Não tem conta? Registre-se
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CadastroScreen')}
                                >
                                    <Text> Agora!</Text>
                                </TouchableOpacity>
                            </Text>

                        </View>


                </View>


            </View>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    todo: {
        width: '100%',
        height: '100%',

    },
    logoImg: {
        alignSelf: 'center',
        marginTop: '20%',


    },
    form: {
        marginTop: '20%',
        alignSelf: 'center',

    },
    frmInput: {



    },
    txtLabel: {
        padding: 8,

    },
    txtForm: {
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: 340,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,

    },


});