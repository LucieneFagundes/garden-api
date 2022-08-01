import { Request, Response } from "express";
import FindActivityService from "../../services/Activity/FindActivityService";

export default class FindActivityController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    const findActivityService = new FindActivityService();

    try {
      const activity = await findActivityService.execute(id);
      return response.status(200).json(activity);
    } catch (error) {
      return response.status(401).json({
        error: error.message
      })
    }

  }
}
