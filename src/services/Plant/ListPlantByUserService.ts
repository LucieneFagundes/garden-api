import { ParamsDictionary } from "express-serve-static-core";
import { prisma } from "../../prisma";


export class ListPlantByUserService{
    async execute(user: ParamsDictionary){

        return await prisma.plant.findMany({
            where: {
                userId: user.id
            }
        }); 
    }
}