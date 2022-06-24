import { Request, Response } from "express";
import { ListActivityByPlantService } from "../../services/Activity/ListActivityByPlantService";

export class ListActivityByPlantController {
    async handle(request: Request, response: Response) {

        const plantId = request.params;
        const listActivityByPlantService = new ListActivityByPlantService();

        try {
            const list = await listActivityByPlantService.execute(plantId);

            return response.status(200).json(list);
        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}