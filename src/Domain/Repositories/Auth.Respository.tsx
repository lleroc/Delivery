import { RespuestaBackendDelivery } from "../../Data/Sources/remote/models/RespuestaBackendDelivery";
import { User } from "../Entities/user.entity";

export interface AuthRepository{
    login(email:string, password:string): Promise<RespuestaBackendDelivery>
    registro(usuario: User): Promise<RespuestaBackendDelivery>
}