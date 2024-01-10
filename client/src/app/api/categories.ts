// * Modules * //
import { AxiosResponse } from "axios";
import api from ".";


interface RegisterCategoryProps {
    name: string;
    color: string;
    icon: string;
}

export const registerCategory = async ({name, color, icon}: RegisterCategoryProps): Promise<AxiosResponse<any, any>> => {
    const token = localStorage.getItem(import.meta.env.JWT_DEFAULT_LOCAL);

    const response = await api.post('/categories/create',{
        headers: {
            Authorization: `Bearer ${token?.replace(/"/g, "")}`
        }
    });
    
    return response;
}