import { prisma } from "../../prisma";
import { SetNextEvent } from "../functions/SetNextEvent";

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

        const setNextEvent = new SetNextEvent();
        activity.next_event = setNextEvent.execute(activity.period, activity.period_qd, activity.next_event);

        const up_event = await prisma.activityCycle.update({
            where: {
                id: activity.id,
            },
            data: {
                next_event: activity.next_event
            }
        });

        console.log(up_event)
        return up_event;
    }
}