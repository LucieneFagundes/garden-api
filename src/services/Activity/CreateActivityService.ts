import { Activity, Period } from "@prisma/client";
import { prisma } from "../../prisma";
import { setNextEvent } from "../../utils/utils";

interface ICreateActivity {
    plantId: string;
    activity: Activity;
    period: Period;
    period_qd: number;
    notes?: string;
    initial_event: Date;
}

export class CreateActivityService {
    async execute({ plantId, activity, period, period_qd, notes, initial_event }: ICreateActivity) {

        const activityAlreadyExists = await prisma.activityCycle.findFirst({
            where: {
                plantId,
                AND: {
                    activity
                }
            }
        })
        
        if (activityAlreadyExists) {
            throw new Error("Activity already exists")
        }
        
        const next_event = setNextEvent(period, period_qd, initial_event);


        const care = await prisma.activityCycle.create({
            data: {
                plantId,
                activity,
                period,
                period_qd,
                notes,
                initial_event,
                next_event,
            }
        })

        return care;
    }
}