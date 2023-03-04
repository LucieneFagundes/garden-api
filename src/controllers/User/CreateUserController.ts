import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    try {
      const { token, user } = await createUserService.execute({
        name,
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
