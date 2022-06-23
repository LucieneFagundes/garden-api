import { Request, Response } from "express";
import { CreateActivityService } from "../services/CreateActivityService";


export class CreateActivityController {

    async handle(request: Request, response: Response) {
        const { plantId, activity, period, period_qd, notes, initial_event } = request.body;

        const createActivityService = new CreateActivityService();

        try {
            const care = await createActivityService.execute({
                plantId, activity, period, period_qd, notes, initial_event
            })

            return response.status(201).json(care);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}