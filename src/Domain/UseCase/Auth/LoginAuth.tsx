import {AuthRespositoryImpl} from "../../../Data/Repositories/Auth.Data.Respository";
const {login} = new AuthRespositoryImpl();
export const LoginAuthUseCase = async (email : string, password : string) => {
    return await login(email, password);
}
