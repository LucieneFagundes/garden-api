import { Request, Response } from "express";
import { CreatePlantService} from "../services/CreatePlantService";


export class CreatePlantController {
    async handle(request: Request, response: Response) {
        const { name, species, photo, notes, userId } = request.body;

        try {

            const createPlantService = new CreatePlantService()

            const plant = await createPlantService.execute({
                name, species, photo, notes, userId
            })

            return response.status(201).json(plant)

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })

        }

    }
}