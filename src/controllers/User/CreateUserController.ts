import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, photo } = request.body;

        const createUserService = new CreateUserService();

        try {
            await createUserService.execute({
                name,
                email,
                password,
                photo
            })

            return response.status(201).send()
        } catch (error) {
            
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }

    }
}