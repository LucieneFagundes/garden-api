import { ParamsDictionary } from "express-serve-static-core";
import { prisma } from "../../prisma";

export class ListActivityByPlantUseCase{
    async execute (plantId: ParamsDictionary) {
        const activities = await prisma.activityCycle.findMany({
            where: {
                plantId: plantId.id
            }
        })

        return activities;
    }
}