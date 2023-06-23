import { AuthRespositoryImpl } from '../../../Data/Repositories/Auth.Data.Respository';
import { User } from '../../Entities/user.entity';

const { registro } = new AuthRespositoryImpl(); 

export const RegisterAuthUseCase = async (usuario: User)=>{
    return await registro(usuario);
}