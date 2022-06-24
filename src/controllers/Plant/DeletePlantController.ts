import { Request, Response } from "express";
import { DeletePlantService } from "../../services/Plant/DeletePlantService";

export class DeletePlantController {
    async handle(request: Request, response: Response) {
        const plantId = request.params;
        const deletePlantService = new DeletePlantService();

        try {
            await deletePlantService.execute(plantId);

            return response.status(200).send();            
        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}