import { prisma } from "../../prisma";

interface IPlant {
  id: string;
  name: string;
  species: string;
  photo?: any;
  notes: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
}

interface IActivity {
  id: string;
  activity: string;
  period: string;
  period_qd: number;
  notes: string;
  initial_event: Date;
  next_event: Date;
  created_at: Date;
  updated_at: Date;
  plantId: string;
  plant: IPlant;
}
export class PlantWithActivityService {
  async execute(userId: string) {
    let arrayActivities: IActivity[] = [];
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

    for (let i = 0; i < plants.length; i++) {
      const activities = await prisma.activityCycle.findMany({
        where: {
          plantId: plants[i].id,
        },
        include: {
          plant: true
        }
      });

      for (let j = 0; j < activities.length; j++) {
        activities.map((act: any) => {
          return {
            id: act.id,
            activity: act.activity,
            initial_event: act.initial_event,
            next_event: act.next_event,
            plantId: act.plant.id,
            name: act.plant.name,
            photo: act.plant.photo,
          };
        });
        
        arrayActivities.push(activities[j]);
      }
    }

    return arrayActivities;
  }
}
