import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, TextInput, Button, ToastAndroid, ScrollView, ImageBackground, } from 'react-native';
import { RadioButton, } from 'react-native-paper';

export const CadastroScreen  = () =>{
    const [checked, setChecked] = React.useState('first');
    return (
        <ScrollView >
        <ImageBackground source={require('../../../assets/layout/comida.jpg')} resizeMode="cover">

            <View>
                {/* Comentario de Código*/}
                <Image
                    style={styles.logoImg}
                    source={require('../../../assets/layout/logo.png')}
                />

                {/*Criando O formulario de Login */}



                    <View style={styles.form}>
                        <View style={styles.frmInput}>
                            <Text style={styles.txtLabel}>Nome</Text>
                            <TextInput style={styles.txtForm} placeholder="Digite seu Nome" keyboardType='default'></TextInput>
                        </View>

                        <View style={styles.frmInput}>
                            <Text style={styles.txtLabel}>Sobrenome</Text>
                            <TextInput style={styles.txtForm} placeholder="Digite seu Sobrenome" keyboardType='default'></TextInput>
                        </View>
                        <View style={styles.frmInput}>
                            <Text style={styles.txtLabel}>E-mail</Text>
                            <TextInput style={styles.txtForm} placeholder="Digite seu Email" keyboardType='email-address'></TextInput>
                        </View>


                        <View style={styles.frmInput}>
                            <Text style={styles.txtLabel}>Senha:</Text>
                            <TextInput style={styles.txtForm} placeholder="Digite seu Senha" keyboardType='default' secureTextEntry={true}></TextInput>
                        </View>

                        <View style={styles.frmInput}>
                            <Text style={styles.txtLabel}>Confirme sua senha:</Text>
                            <TextInput style={styles.txtForm} placeholder="Digite sua senha novamente" secureTextEntry={true}></TextInput>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <Text style={styles.txtLabel}>Tipo de Cadastro</Text>
                        </View>

                        <View style={styles.container}>

                            <RadioButton
                                value="Vendedor"
                                status={checked === 'vendedor' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('vendedor')}
                            />
                            <Text style={{ marginTop: 7 }}>Vendedor</Text>


                            <RadioButton
                                value="Cliente"
                                status={checked === 'cliente' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('cliente')}
                            />
                            <Text style={{ marginTop: 7 }}>Cliente</Text>

                            <RadioButton
                                value="Entregador"
                                status={checked === 'entregador' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('entregador')}
                            />
                            <Text style={{ marginTop: 7 }}>Entregador</Text>

                        </View>

                        <View style={{ marginTop: 30 }}>
                            <Button title='Cadastrar' color='#f00' onPress={() => ToastAndroid.show('Sucesso', ToastAndroid.LONG)}></Button>

                        </View>

                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text style={styles.txtLabel}>Ja tenho Conta</Text>
                        </View>

                    </View>

                
            </View>
        </ImageBackground>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    logoImg: {
        alignSelf: 'center',
        marginTop: '10%',


    },
    form: {
        marginTop: '5%',
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

    container: {
        flex: 1,
        flexDirection: "row",
        alignSelf: 'center',
        marginTop: 20,

    }




});