import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// interceptors for catch 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Usuário não autorizado");

      // remove login salvao
      localStorage.removeItem("user");

      // redireciona para Login
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);