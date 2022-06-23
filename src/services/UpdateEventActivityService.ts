import { prisma } from "../prisma";
import { ActivityService } from "./functions/ActivityService";

export class UpdateEventActivityService {
    async execute(id: string) {
        const activityService = new ActivityService();
        const activity = await prisma.activityCycle.findFirst({
            where: {
                id
            }
        })

        activity.next_event = activityService.execute(activity.period, activity.period_qd, activity.next_event);

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