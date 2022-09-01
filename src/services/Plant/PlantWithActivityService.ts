import { prisma } from "../../prisma";

interface IActivity {
  id: string;
  activity: string;
  initial_event: Date;
  next_event: Date;
  plantId: string;
  name: string;
  photo: string;
}

export class PlantWithActivityService {
  async execute(userId: string) {
    let arrayActivities = [];
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
      });

      for (let j = 0; j < activities.length; j++) {
        activities.map((act: any) => {
          return {
            id: act.id,
            activity: act.activity,
            initial_event: act.initial_event,
            next_event: act.next_event,
            plantId: plants[i].id,
            name: plants[i].name,
            photo: plants[i].photo,
          };
        });

        arrayActivities.push(activities[j]);
      }
    }

    return arrayActivities;
  }
}
