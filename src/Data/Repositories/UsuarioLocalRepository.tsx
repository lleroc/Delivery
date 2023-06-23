import { User } from '../../Domain/Entities/user.entity';
import { UsuarioLocalRepositorio } from '../../Domain/Repositories/UsuarioLocal.Repository';
import { localStorage } from "../Sources/local/localStorage";

export class UsuarioLocalRepositorioImpl implements UsuarioLocalRepositorio{

    async guardar(usuario: User): Promise<void> {
        const {guardar } = localStorage();
        await guardar('usuario',JSON.stringify(usuario));
    }
    async obtenerusuario(): Promise<User> {
        const {obtener} = localStorage();
        const datos = await obtener('usuario');
        const usuario:User = JSON.parse(datos as any);
        return usuario;
    }
}