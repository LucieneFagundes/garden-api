import { prisma } from "../prisma";

export interface ICreatePlant {
    name: string;
    species?: string;
    photo?: string;
    notes?: string;
    userId: string;
}

export class CreatePlantService {
    async execute({ name, species, photo, notes, userId }: ICreatePlant) {

        const plantAlreadyExists = await prisma.user.findFirst({ 
            where: { 
                id: userId,
                AND:{ 
                    plants:{
                        some:{
                            name:name
                        }
                    }
                }
            } 
        })
        
        if (plantAlreadyExists) {
            throw new Error("Plant with this name already existing.")
        }

        const plant = await prisma.plant.create({
            data: {
                name,
                species,
                photo,
                notes,
                userId,
            }
        })

        return plant;
    }
}