import { Request, Response } from "express";
import { EditActivityService } from "../../services/Activity/EditActivityService";

export class EditActivityController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        const data = request.body;
        const editActivityService = new EditActivityService();

        try {
            await editActivityService.execute(id, data);

            return response.status(200).json(data);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }

    }
}