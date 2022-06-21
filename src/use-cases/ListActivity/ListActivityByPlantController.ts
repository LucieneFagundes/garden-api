import { Request, Response } from "express";
import { ListActivityByPlantUseCase } from "./ListActivityByPlantUseCase";

export class ListActivityByPlantController {
    async handle(request: Request, response: Response) {

        const plantId = request.params;
        const listActivityByPlantUseCase = new ListActivityByPlantUseCase();

        try {
            const list = await listActivityByPlantUseCase.execute(plantId);

            return response.status(200).json(list);
        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            });
        }


    }
}