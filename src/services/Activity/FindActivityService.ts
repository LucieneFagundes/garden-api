import { prisma } from "../../prisma";

export default class FindActivityService {
  async execute(id: string) {
    const activity = await prisma.activityCycle.findFirst({
      where: {
        id,
      },
    });

    if (!activity) {
      throw new Error("Tarefa não encontrada");
    }

    return activity;
  }
}
