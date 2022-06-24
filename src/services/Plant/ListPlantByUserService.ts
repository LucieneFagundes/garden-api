import { ParamsDictionary } from "express-serve-static-core";
import { prisma } from "../../prisma";


export class ListPlantByUserService {
    async execute(userId: ParamsDictionary) {

        const userExists = await prisma.user.findFirst({
            where: {
                id: userId.id
            }
        })

        if (!userExists) {
            throw new Error("User not found")
        }

        const plants = await prisma.plant.findMany({
            where: {
                userId: userId.id
            }
        })

        return plants;
    }
}