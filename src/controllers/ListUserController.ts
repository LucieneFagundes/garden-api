import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";


export class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService();

        try {
            const users = await listUserService.execute(); 
                      
            return response.status(200).json(users);

        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            });
        }

    }
}