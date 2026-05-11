import { api } from "./api";

export const register = async (data: { nome: string, email: string, senha:string }) => {
  return api("/user", {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export const login = async (data: { email: string; senha: string }) => {
  return api("/user/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
