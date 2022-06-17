import { Request, Response } from "express";
import { ListPlantByUserUseCase } from "./ListPlantByUserUseCase";

export class ListPlantByUserController {
    async handle(request: Request, response: Response) {
        const id = request.params;

        const listPlantByUserUseCase = new ListPlantByUserUseCase();

        try {
            const plants = await listPlantByUserUseCase.execute(id)

            return response.status(201).json(plants)

        } catch (error) {
            return response.status(404).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}