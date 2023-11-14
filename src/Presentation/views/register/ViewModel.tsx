import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';

 export const RegisterViewModel = () => {
    //Retaurando os valores dos campos formulários
    const[values,setValues] = useState({
        nome:'',
        sobrenome:'',
        email:'',
        senha:'',
    });
    //Criando o metódo
    const onChange = (property: string, value: any) =>{
        //Estruturando os Valores
        setValues({...values,[property]: value});
    }
    /*Criando a função para o envio do console.lo
        const register = () =>{
            console.log(JSON.stringify(values))
        }
    */
   const register = async () =>{
        try{
            const response = await ApiDelivery.post('/user/create', values);
            console.log('Resposta: ' + JSON.stringify(response.data));
        }catch (error){
            console.log('ERRO: ' + error);
        }
   }

    return {
        ...values,
        onChange,
        register
    }
 }
 export default RegisterViewModel;