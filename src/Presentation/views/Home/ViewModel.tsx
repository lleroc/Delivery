import React, {useEffect, useState} from "react";
import {LoginAuthUseCase} from "../../../Domain/UseCase/Auth/LoginAuth";
import {ObtenerUsuarioLocalCasoUso} from "../../../Domain/UseCase/usuarioLocal/obtenerusuario";
import {GuardarUsuarioLocalCasoUso} from "../../../Domain/UseCase/usuarioLocal/guardarUsuario";

export const HomeViewModel = () => {
    const [errorMessage, seterrorMessage] = useState('');
    const [values, setValues] = useState({email: '', password: ''})

    useEffect(() => {
        obtenerusuarioLocalStorage()
    }, []);
    const obtenerusuarioLocalStorage = async () => {
        const usuario = await ObtenerUsuarioLocalCasoUso();
        console.log('Usuario de inicio de session: ' + JSON.stringify(usuario))
    }
    const onChange = (propiedad : string, value : any) => {
        setValues({
            ...values,
            [propiedad]: value
        })

    }
    const login = async () => {
        if (validarlogin()) {
            const respuesta = await LoginAuthUseCase(values.email, values.password);
            console.log("Respuesta: " + JSON.stringify(respuesta));
            if (! respuesta.success) {
                seterrorMessage(respuesta.message)
            } else {
                await GuardarUsuarioLocalCasoUso(respuesta.data);
            }
        }
    }
    const validarlogin = () => {
        if (values.email === '') {
            seterrorMessage('Campo querido')
            return false;
        }
        if (values.password === '') {
            seterrorMessage('Campo querido')
            return false;
        }
        return true;
    }
    return {
        ...values,
        onChange,
        errorMessage,
        login
    }
}
export default HomeViewModel;
