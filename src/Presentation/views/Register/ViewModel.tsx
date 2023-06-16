import React, { useState } from "react";
import { ApiDelivery } from "../../../Data/Sources/remote/api/ApiDelivery.api";
export const RegisterViewModel = () => {
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
    try {
      const response = await ApiDelivery.post("/usuarios/insertar", values);
      console.log("Respuesta: " + JSON.stringify(response));
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };
  return {
    ...values,
    onChange,
    register,
  };
};
export default RegisterViewModel;
