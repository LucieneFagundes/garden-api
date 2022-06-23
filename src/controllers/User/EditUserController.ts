import { Request, Response } from "express";
import { EditUserService } from "../../services/User/EditUserService";

export class EditUserController  {
    async handle(request: Request, response: Response) {
        const user = request.body;

        try {
            const editUserService = new EditUserService();

            const editUser = editUserService.execute(user);
            
            return response.status(200).json(editUser)
            
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}