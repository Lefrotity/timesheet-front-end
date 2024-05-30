import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    // probably will change
    return $api.post<AuthResponse>("/login", { email, password });
  }

  static async registration(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<AxiosResponse<AuthResponse>> {
    // probably will change
    return $api.post<AuthResponse>("/registration", {
      email,
      password,
      firstName,
      lastName,
    });
  }

  static async logout(): Promise<void> {
    $api.post<AuthResponse>("/logout");
  }
}