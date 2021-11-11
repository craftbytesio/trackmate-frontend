import axios from "axios";
import store from "@/store";


export const authClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true, // required to handle the CSRF token
  });
  
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