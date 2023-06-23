import {AxiosError} from "axios";
import {User} from "../../Domain/Entities/user.entity";
import {AuthRepository} from "../../Domain/Repositories/Auth.Respository";
import {ApiDelivery} from "../Sources/remote/api/ApiDelivery.api";
import {RespuestaBackendDelivery} from "../Sources/remote/models/RespuestaBackendDelivery";

export class AuthRespositoryImpl implements AuthRepository {
    async registro(usuario : User): Promise < RespuestaBackendDelivery > {
        try {
            const response = await ApiDelivery.post<RespuestaBackendDelivery>("/usuarios/insertar", usuario);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + e.response);
            const apiError: RespuestaBackendDelivery = JSON.parse(JSON.stringify(e.response))
            return Promise.resolve(apiError);
        }
    }
    async login(email : string, password : string): Promise < RespuestaBackendDelivery > {
        try {
            const response = await ApiDelivery.post<RespuestaBackendDelivery>("/usuarios/login", {
                email: email,
                password: password
            });
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + e.response);
            const apiError: RespuestaBackendDelivery = JSON.parse(JSON.stringify(e.response))
            return Promise.resolve(apiError);
        }
    }
}
