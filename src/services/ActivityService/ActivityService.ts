import { Period } from "@prisma/client";


export class ActivityService {
    execute(period: Period, period_qd: number, initial_event: Date){
        
        var data = new Date(initial_event)

        switch (period) {
            case 'dia':
                data.setDate(data.getDate() + 1 * period_qd);
                break;
            case 'semana':
                data.setDate(data.getDate() + 7 * period_qd);
                break;
            case 'mes':
                data.setDate(data.getDate() + 30 * period_qd);
                break;
        }
        return data;
    }
}