import { Request, Response } from "express";
import { CreatePlantUseCase } from "./CreatePlantUseCase";


export class CreatePlantController {
    async handle(request: Request, response: Response) {
        const { name, species, photo, userId } = request.body;

        try {

            const createPlantUseCase = new CreatePlantUseCase()

            const plant = await createPlantUseCase.execute({
                name, species, photo, userId
            })

            return response.status(201).json(plant)

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })

        }

    }
}