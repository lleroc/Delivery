import { User } from "../Entities/user.entity";

export interface UsuarioLocalRepositorio{
    guardar(usuario:User):Promise<void>;
    obtenerusuario():Promise<User>;
}