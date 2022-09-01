import { Request, Response } from "express";
import { PlantWithActivityService } from "../../services/Plant/PlantWithActivityService";

export class PlantWithActivityController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const plantWithActivityService = new PlantWithActivityService();

    try {
      const result = await plantWithActivityService.execute(id);

      return response.json(result);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
