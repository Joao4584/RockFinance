// * Modules * //
import axios from "axios"; 
import { redirect } from "react-router";

// * Exports * //
 
 
// * Components * //
const api = axios.create({
    baseURL: import.meta.env.VITE_URL_BASE + "/api",
});

api.interceptors.response.use(
    response => response,
    error => {
      if (error.response) {
        console.log(error.response.status)
        if (error.response.status >= 500) {
            console.error('Erro 500', error);
        }
        
        if (error.response.status === 401) {
          window.location.href = "/auth"
        }
        
      }
  
      return Promise.reject(error);
    }
  );

export default api;