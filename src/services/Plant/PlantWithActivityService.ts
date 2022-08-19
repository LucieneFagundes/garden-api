import { prisma } from "../../prisma";

interface PlantsProps {
  id?: string;
  name?: string;
  species?: string;
  photo?: any;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
  userId?: string;
  activites?: Activities[ ]
}
interface Activities {
  id: string;
  activity?: string;
  period?: string;
  period_qd?: number;
  notes?: string;
  initial_event?: Date;
  next_event?: Date;
  created_at?: Date;
  updated_at?: Date;
  plantId?: string;
}

export class PlantWithActivityService {
  async execute(userId: string){
    const userExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new Error("User not found");
    }

    const plants = await prisma.plant.findMany({
      where: {
        userId,
      },
    });

    const arrayPlants: PlantsProps[] = plants; 

    for (let i = 0; i < arrayPlants.length; i++) {
      const activites = await prisma.activityCycle.findMany({
        where: {
          plantId: arrayPlants[i].id,
        },
      });
      arrayPlants[i].activites = activites 
    } 

    return arrayPlants;
  }

}