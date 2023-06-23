import { UsuarioLocalRepositorioImpl } from '../../../Data/Repositories/UsuarioLocalRepository';

const { obtenerusuario } = new UsuarioLocalRepositorioImpl();
export const ObtenerUsuarioLocalCasoUso =async()=>{
    return await obtenerusuario();
}