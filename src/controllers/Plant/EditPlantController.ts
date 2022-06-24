import { Request, Response } from "express";
import { EditPlantService } from "../../services/Plant/EditPlantService";

export class EditPlantController {
    async handle(request: Request, response: Response) {
        const data = request.body;

        const editPlantService = new EditPlantService();
        try {
            await editPlantService.execute(data);

            return response.status(200).send();
        } catch (error) {
            return response.status(404).json({
                message: error.message || "Unexpected error"
            })
        }
    }
}