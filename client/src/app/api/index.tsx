// * Modules * //
import axios from "axios";

// * Exports * //
import messageNotify from "@/components/Message/notify";


// * Components * //
const api = axios.create({
  baseURL: import.meta.env.VITE_URL_BASE + "/api",
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status >= 500) {
        console.error('Erro 500', error);
      }

      if (error.response.status === 401) {
        setTimeout(() => {
          window.location.href = "/auth"
        }, 1000);
      }

    }

    return Promise.reject(error);
  }
);

export default api;