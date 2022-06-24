import { Request, Response } from "express";
import { DeleteActivityService } from "../../services/Activity/DeleteActivityService";

export class DeleteActivityController {
    async handle(request: Request, response: Response) {
        const data = request.params;

        const deleteActivityService = new DeleteActivityService();

        try {
            deleteActivityService.execute(data);
            response.status(200).send();
        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }
}