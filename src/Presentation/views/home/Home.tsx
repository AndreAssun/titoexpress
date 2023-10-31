import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RouderdButton } from '../../Presentation/components/RouderdButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParomList } from '../../../App';

export const HomeScreen = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    const navigation = useNavigation<StackNavigationProp<RootStackParomList>>();

    return (

        <View style={styles.todo}>
            {/* Comentario de Código*/}
            <Image
                style={styles.logoImg}
                source={require('../../../assets/layout/logo.png')}
            />

            {/*Criando O formulario de Login */}

            <View style={styles.form}>
                <View style={styles.frmInput}>
                    <Text style={styles.txtLabel}>E-mail</Text>
                    <TextInput style={styles.txtForm}
                        placeholder="Digite seu Email"
                        keyboardType='email-address'
                        value={email}
                        onChangeText={text => setEmail(text)}>
                    </TextInput>
                </View>

                <View style={styles.frmInput}>
                    <Text style={styles.txtLabel}>Senha:</Text>
                    <TextInput style={styles.txtForm} placeholder="Digite seu Senha"
                        keyboardType='default'
                        value={senha}
                        onChangeText={text => setSenha(text)}
                        secureTextEntry={true}>

                    </TextInput>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Button title='Entrar' color='#f00' onPress={() =>{ 
                        console.log('email', email);
                        console.log('senha', senha);
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

    )
}
const styles = StyleSheet.create({
    todo: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f2f1',

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