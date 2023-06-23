import React, { useState } from "react";
import { RegisterAuthUseCase } from "../../../Domain/UseCase/Auth/RegisterAuth";

export const RegisterViewModel = () => {
  const [errorMessage, seterrorMessage] = useState('');
  const [values, setValues] = useState({
    Nombres: "",
    Apellidos: "",
    email: "",
    Telefono: "",
    password: "",
    repeatPassword: "",
  });
  const onChange = (propiedad: string, value: any) => {
    setValues({
      ...values,
      [propiedad]: value,
    });
  };
  const register = async () => {
    if (esvalidoPara()) {
      const resultadoApi = await RegisterAuthUseCase(values);
      console.log("Result: " + JSON.stringify(resultadoApi));
    }
  };
  const esvalidoPara=():boolean=>{
    if (values.Nombres ==='') {
      seterrorMessage('Campo querido')
      return false;
    }
    if (values.Apellidos ==='') {
      seterrorMessage('Campo querido')
      return false;
    } 
    if (values.email ==='') {
      seterrorMessage('Campo querido')
      return false;
    } 
    if (values.password ==='') {
      seterrorMessage('Campo querido')
      return false;
    } 
    if (values.repeatPassword ==='') {
      seterrorMessage('Campo querido')
      return false;
    }
    if (values.password !== values.repeatPassword) {
      seterrorMessage('Las contraseñas no son iguales');
      return false;
    }
    return true;
  }
  return {
    ...values,
    onChange,
    register,
    errorMessage
  };
};
export default RegisterViewModel;
