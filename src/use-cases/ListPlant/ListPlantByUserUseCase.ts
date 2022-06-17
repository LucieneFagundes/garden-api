import { ParamsDictionary } from "express-serve-static-core";
import { prisma } from "../../prisma";


export class ListPlantByUserUseCase{
    async execute(idUser: ParamsDictionary){

        return await prisma.plant.findMany({
            where: {
                userId: idUser.id
            }
        }); 
    }
}