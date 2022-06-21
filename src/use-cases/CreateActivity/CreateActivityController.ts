import { Request, Response } from "express";
import { CreateActivityUseCase } from "./CreateActivityUseCase";

export class CreateActivityController {

    async handle(request: Request, response: Response) {
        const { plantId, activity, period, period_qd, notes, initial_event } = request.body;

        const createActivityUseCase = new CreateActivityUseCase();

        try {
            const care = await createActivityUseCase.execute({
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