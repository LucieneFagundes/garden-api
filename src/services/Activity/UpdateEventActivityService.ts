import { prisma } from "../../prisma";
import { setNextEvent } from "../../utils/utils";

export class UpdateEventActivityService {
    //UPDATE NEXT_EVENT
    async execute(id: string) {
        const activity = await prisma.activityCycle.findFirst({
            where: {
                id
            }
        })

        if(!activity){
            throw new Error("Activity not found");
        }

        activity.next_event = setNextEvent(activity.period, activity.period_qd, activity.next_event);

        const up_event = await prisma.activityCycle.update({
            where: {
                id: activity.id,
            },
            data: {
                next_event: activity.next_event
            }
        });

        return up_event;
    }
}