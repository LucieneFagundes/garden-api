import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const createUserService = new CreateUserService();

        try {
            await createUserService.execute({
                name,
                email,
                password
            })

            return response.status(201).send()
        } catch (error) {
            
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }

    }
}