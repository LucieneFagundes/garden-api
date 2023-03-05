import { ParamsDictionary } from "express-serve-static-core";
import { prisma } from "../../prisma";

export class ListActivityByPlantService {
  async execute(plantId: ParamsDictionary) {
    const plantExists = await prisma.plant.findFirst({
      where: { id: plantId.id },
    });

    if (!plantExists) {
      throw new Error("Planta não encontrada");
    }

    const activities = await prisma.activityCycle.findMany({
      where: {
        plantId: plantId.id,
      },
    });

    return activities;
  }
}
