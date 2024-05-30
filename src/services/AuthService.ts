import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    // probably will change
    return $api.post<AuthResponse>("/auth/signin", { email, password });
  }

  static async registration(
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ): Promise<AxiosResponse<AuthResponse>> {
    // probably will change
    return $api.post<AuthResponse>("/auth/signup", {
      email,
      password,
      firstname,
      lastname,
    });
  }

  static async logout(): Promise<void> {
    // $api.post<AuthResponse>("/logout");
    localStorage.removeItem("token");
  }
}
