import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserUseCase = new ListUserUseCase();

        try {
            const users = await listUserUseCase.execute(); 
                      
            return response.status(200).json(users);

        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            });
        }

    }
}