import React, {useState} from "react";
export const RegisterViewModel = () => {
    const [values, setValues] = useState({
        Nombres:'',
        Apellidos:'',
        email:'',
        Telefono:'',
        password:'',
        repeatPassword:''
    })
    const onChange = (propiedad: string, value:any)=>{
        setValues({ ...values, [propiedad]:value})
    }
    const register = ()=>{
        alert(JSON.stringify(values))
    }
    return {...values, onChange, register}
}
export default RegisterViewModel;