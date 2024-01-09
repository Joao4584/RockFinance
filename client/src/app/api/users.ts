import { AxiosError, AxiosResponse } from "axios";
import api from ".";

interface ImageRequest {
  imageUrl: string;
}

let response: AxiosResponse<any, any>;
export const sendImage = async (request: ImageRequest): Promise<AxiosResponse<any, any>> => {
  const token = localStorage.getItem(import.meta.env.JWT_DEFAULT_LOCAL);

  try {
    response = await api.post('/users/image', {
        image_url: request.imageUrl
    }, {
      headers: {
        Authorization: `Bearer ${token?.replace(/"/g, "")}`,
      }
    });
    return response;
  } catch (error: any) {
    return error.response || error; 
  }
};