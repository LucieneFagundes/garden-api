import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/User/AuthenticateUser";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const autheticateUserService = new AuthenticateUserService();

    try {
      const { token, user } = await autheticateUserService.execute({
        email,
        password,
      });

      return response.json({ token, user });
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Erro inesperado.",
      });
    }
  }
}
