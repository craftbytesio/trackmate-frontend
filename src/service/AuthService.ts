import axios from "axios";
import store from "@/store";


export const authClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true, // required to handle the CSRF token
  });

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (
          error.response &&
          [401, 419].includes(error.response.status) &&
          store.getters["getCurrentUser"]
      ) {
        store.dispatch("logout");
      }
      return Promise.reject(error);
    }
);
  
  export default {
    async login(payload) {
      await authClient.get("/sanctum/csrf-cookie");
      return await authClient.post("/login", payload);
    },
    logout() {
      return authClient.post("/logout");
    },
    getAuthUser() {
      return authClient.get("/api/users/auth");
    },
  };