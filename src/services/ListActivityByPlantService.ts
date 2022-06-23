import { ParamsDictionary } from "express-serve-static-core";
import { prisma } from "../prisma";

export class ListActivityByPlantService{
    async execute (plantId: ParamsDictionary) {
        const activities = await prisma.activityCycle.findMany({
            where: {
                plantId: plantId.id
            }
        })

        return activities;
    }
}