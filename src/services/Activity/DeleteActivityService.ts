import { prisma } from "../../prisma";
import { ParamsDictionary } from "express-serve-static-core";

export class DeleteActivityService {
  async execute(activityId: ParamsDictionary) {
    const activity = await prisma.activityCycle.findFirst({
      where: { id: activityId.id },
    });

    if (!activity) {
      throw new Error("Tarefa não encontrada");
    }

    const deleteActivity = await prisma.activityCycle.delete({
      where: { id: activityId.id },
    });

    return deleteActivity;
  }
}
