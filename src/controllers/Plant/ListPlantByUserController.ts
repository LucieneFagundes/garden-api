import { Request, Response } from "express";
import { ListPlantByUserService } from "../../services/Plant/ListPlantByUserService";


export class ListPlantByUserController {
    async handle(request: Request, response: Response) {
        const id = request.params;

        const listPlantByUserService = new ListPlantByUserService();

        try {
            const plants = await listPlantByUserService.execute(id)

            return response.status(200).json(plants)

        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}