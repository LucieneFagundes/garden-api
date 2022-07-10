import { prisma } from "../../prisma";

export class FindPlantService {
  async execute({id}: any){
    //TODO: Incluir type correto
    const plant = await prisma.plant.findFirst({
      where: {
        id
      } 
    })
    if(!plant) {
      throw new Error(`Plant is not exists`)
    }

    return plant;
  }
}