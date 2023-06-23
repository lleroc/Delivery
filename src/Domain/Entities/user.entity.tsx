export interface User {
    id?: string;
    Nombres: string;
    Apellidos: string;
    email: string;
    Telefono: string;
    password: string;
    repeatPassword: string;
    session_token?:string;
}
