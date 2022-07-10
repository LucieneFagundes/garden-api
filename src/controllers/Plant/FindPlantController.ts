import { Request, Response } from "express";
import { FindPlantService } from "../../services/Plant/FindPlantService";


export class FindPlantController {
  async handle(request: Request, response: Response) {
    const plantId = request.params;
    const findPlantService = new FindPlantService();

    try {
      const plant = await findPlantService.execute(plantId);
      response.status(200).json(plant);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }

} 