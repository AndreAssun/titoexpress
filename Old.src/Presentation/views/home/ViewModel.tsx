import React, { useState } from "react";

const HomeViewModel = () => {

    // Restaurando os valores dos campos dos formulários
    const [values, setValues] = useState({
        email: '',
        sobrenome: '',
        email: '',
        senha: '',
        confirm: '',
    });

    // Criando o método
    const onChange = (property: string, value: any) => {
        // Estruturando os valores
        setValues({ ...values, [property]: value });
    }

    //Criando função para o envio do console.log
    //const register = () => {
     //   console.group(JSON.stringify(values))
    //}

    const register = async () =>{
        try{
            const reponse = await ApiDelivery.post('/user/create', values);
            console.log('Resposta: ' + JSON.stringify(response.data));

        }catch(error){
            console.log('EERO:' + error);
        }
    }

    return {
        ...values,
        onChange,
        register
    }
}
export default HomeViewModel;