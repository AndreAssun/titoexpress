import React, { useState } from 'react'
const HomeViewModel = () => {
    // Restaurando os valores dos campos dos formulários
    const [values, setValues] = useState({
        email: '',
        senha: '',
    });
    // Criando o metodo
    const onChange = (property: string, value: any) =>{
        // estruturando os valores
        setValues({ ...values, [property]:value });
    }
    // Criando função para o envio do console.log
    const register = () => {
        console.log(JSON.stringify(values))
    }
    return {
        ...values,
        onChange,
        register
    }
}
export default HomeViewModel;