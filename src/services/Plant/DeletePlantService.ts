import { ParamsDictionary } from "express-serve-static-core";
import { prisma } from "../../prisma";

export class DeletePlantService {
    async execute(plantId: ParamsDictionary) {
        const plantNotFound = await prisma.plant.findFirst({
            where: { id: plantId.id }
        })

        if (!plantNotFound) {
            throw new Error("Plant not found");
        }

        const deleteActivities = prisma.activityCycle.deleteMany({
            where: {
                plantId: plantId.id,
            }
        });

        const deletePlant = prisma.plant.delete({
            where: {
                id: plantId.id,
            }
        })

        const transaction = await prisma.$transaction([deleteActivities, deletePlant]);

        return transaction;

    }
}