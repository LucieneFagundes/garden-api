
import { Request, Response } from "express";
import { CreateActivityUseCase } from "./CreateActivityUseCase";

export class CreateActivityController {

    async handle(request: Request, response: Response){
        const {plantId, activity, period, period_qd} = request.body;
        console.log(request.body);
        
        const createActivityUseCase = new CreateActivityUseCase();

        const care = await createActivityUseCase.execute({
            plantId, activity, period, period_qd
        })

        return response.status(201).json(care);
    }
}