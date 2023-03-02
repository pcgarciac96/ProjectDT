import { api } from "@/config/api";

export const login = (credentials) => api.post("login", credentials);
export const userRegister = (data) => api.post("users", data);
