import { Period } from "@prisma/client";
import { prisma } from "../../prisma"

interface IEditActivity{
    id: string;
    notes: string;
    period: Period;
    period_qd: number;
    initial_event: Date;
    updated_at: Date;
}

export class EditActivityService {
    async execute({id, notes, period, period_qd, initial_event, updated_at}: IEditActivity){

        updated_at = new Date();
        
        const care = await prisma.activityCycle.updateMany({
            where: { id },
            data: {
                notes,
                period,
                period_qd,
                initial_event,
                updated_at
            }
        })

        return care;
    }
}