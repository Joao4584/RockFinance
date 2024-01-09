import { AxiosResponse } from "axios";
import api from ".";



export const getStatusUser = async (): Promise<AxiosResponse<any, any>> => {
    const token = localStorage.getItem(import.meta.env.JWT_DEFAULT_LOCAL);

    const response = await api.get('/auth/credencials',{
        headers: {
            Authorization: `Bearer ${token?.replace(/"/g, "")}`
        }
    });
    
    return response;
}