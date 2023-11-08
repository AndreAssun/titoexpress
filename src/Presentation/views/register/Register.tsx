import React from "react";
// import Home from './src/views/home/Home'
import { View, StyleSheet, ImageBackground, Text, ToastAndroid } from 'react-native';
import { Input } from "../../../Presentation/components/Input";
import { RouderdButton } from "../../../Presentation/components/RouderdButton";
import { RadioButton } from "react-native-paper";
import { Logo } from "../../../Presentation/components/Logo";

export const RegisterScreen = () => {
    const [value, setValue] = React.useState('1');
    return (
        <ImageBackground style={styles.imagem} source={require("../../../../assets/mesa.jpg")} resizeMode="cover">
            <Logo></Logo>
            <View style={styles.form}>
                <Text style={styles.txtInput}>Nome completo</Text>
                <Input></Input>
                <Text style={styles.txtInput}>E-mail</Text>
                <Input></Input>
                <Text style={styles.txtInput}>Senha</Text>
                <Input></Input>
                <Text style={styles.txtInput}>Confirme a sua senha</Text>
                <Input></Input>

                <Text style={styles.txtForm}>Tipo de Cadastro</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.radioContainer}>
                        <View style={styles.radioInput}>
                            <Text style={styles.txtRadio}>Cliente</Text>
                            <RadioButton value="1" />
                        </View>
                        <View style={styles.radioInput}>
                            <Text style={styles.txtRadio}>Vendedor</Text>
                            <RadioButton value="2" />
                        </View>
                        <View style={styles.radioInput}>
                            <Text style={styles.txtRadio}>Entregador</Text>
                            <RadioButton value="3" />
                        </View>
                    </View>
                </RadioButton.Group>
                <RouderdButton lblButton='Cadastrar' onPress={() => ToastAndroid.show('Sucesso!', ToastAndroid.SHORT)} />
                <Text style={styles.linkForm}>Já tenho uma conta</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imagem: {
        flex: 1,
        tintColor: 'rgba(255,0,255,0.8)',
    },
    form: {
        marginHorizontal: 25,
    },
    txtInput: {
        fontSize: 14,
        marginBottom: 5,
        color: 'white',
    },
    txtForm: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        marginBottom: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 36,
    },
    radioInput: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
    txtRadio: {
        fontSize: 12,
        color: 'white',
        marginBottom: 10,
        alignContent: 'center',
    },
    linkForm: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        marginTop: 16,
        textDecorationLine: 'underline',
    }
});