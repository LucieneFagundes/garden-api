import { Request, Response } from "express";
import { FindUserService } from "../../services/User/FindUserService";

export class FindUserController {
    async handle(request: Request, response: Response) {
        const {id} = request.params;

        const findUserService = new FindUserService();

        try {
            const user = await findUserService.execute(id);
            return response.json(user)
        } catch (error) {
            return response.json({
                message: error.message
            })
        }
    }
}