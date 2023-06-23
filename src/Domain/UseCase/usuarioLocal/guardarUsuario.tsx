import { UsuarioLocalRepositorioImpl } from '../../../Data/Repositories/UsuarioLocalRepository';
import { User } from '../../Entities/user.entity';
const { guardar } = new UsuarioLocalRepositorioImpl();
export const GuardarUsuarioLocalCasoUso =async(usuario:User)=>{
    return await guardar(usuario);
}