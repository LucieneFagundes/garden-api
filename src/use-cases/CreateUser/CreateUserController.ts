import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const createUserUseCase = new CreateUserUseCase();

        try {
            await createUserUseCase.execute({
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