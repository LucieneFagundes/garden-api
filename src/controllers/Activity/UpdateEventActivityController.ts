import { Request, Response } from "express";
import { UpdateEventActivityService } from "../../services/Activity/UpdateEventActivityService";

export class UpdateEventActivityController {
    //UPDATE NEXT_EVENT
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const updateEventActivityService = new UpdateEventActivityService();

        try {
            const up_event = updateEventActivityService.execute(id);

            return response.status(201).json(up_event);

        }  catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }

    }
}