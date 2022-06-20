import { Activity, Period } from "@prisma/client";
import { prisma } from "../../prisma";

interface ICreateActivity{
    plantId: string;
    activity: Activity;
    period: Period;
    period_qd: number;
}

export class CreateActivityUseCase{

    async execute({plantId, activity, period, period_qd }: ICreateActivity){

        const activityAlreadyExists = await prisma.activityCycle.findFirst({
            where: {
                plantId,
                AND: {
                    activity
                }
            }
        })

        if(activityAlreadyExists) {
            throw new Error("Activity already exists")
        }

        const care = await prisma.activityCycle.create({
            data:{
                plantId, 
                activity, 
                period, 
                period_qd
            }
        })

        return care;
    }
}