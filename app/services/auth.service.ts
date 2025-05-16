import { apiClient } from "../lib/api-client";
import { LoginCredentials, TokenResponse } from "../types/auth";

class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async generateToken(
    credentials: LoginCredentials
  ): Promise<TokenResponse> {
    try {
      const formData = new URLSearchParams();
      formData.append("username", credentials.username);
      formData.append("password", credentials.password);

      const response = await apiClient.post<TokenResponse>(
        "/api/auth",
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Error generating token:", error);
      throw error;
    }
  }
}

export const authService = AuthService.getInstance();
