import { Request, Response } from "express";
import { UpdateEventActivityUseCase } from "./UpdateEventActivityUseCase";

export class UpdateEventActivityController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const updateEventActivityUseCase = new UpdateEventActivityUseCase();



        try {
            const up_event = updateEventActivityUseCase.execute(id);

            return response.status(201).json(up_event);

        }  catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }


    }
}