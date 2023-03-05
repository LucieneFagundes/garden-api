import { Activity, Period } from "@prisma/client";
import { prisma } from "../../prisma";

interface IEditActivity {
  id: string;
  activity: Activity;
  notes: string;
  period: Period;
  period_qd: number;
  initial_event: Date;
  updated_at: Date;
}

export class EditActivityService {
  async execute(
    id,
    {
      activity,
      notes,
      period,
      period_qd,
      initial_event,
      updated_at,
    }: IEditActivity
  ) {
    const notFound = await prisma.activityCycle.findFirst({
      where: { id },
    });

    if (!notFound) {
      throw new Error(`Tarefa não encontrada: ${id}`);
    }

    updated_at = new Date();

    const care = await prisma.activityCycle.updateMany({
      where: { id },
      data: {
        activity,
        notes,
        period,
        period_qd,
        initial_event,
        next_event: initial_event,
        updated_at,
      },
    });

    return care;
  }
}
