import { Request, Response } from "express";
import { PlantWithActivityService } from "../../services/Plant/PlantWithActivityService";

export class PlantWithActivityController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const plantWithActivityService = new PlantWithActivityService();

    try{
      const plants = await plantWithActivityService.execute(id);

      return response.json({plants});
    } catch (err) {
      console.log(err);
    }

  }
}
