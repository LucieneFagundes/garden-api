import { prisma } from "../prisma";


export class ListUserService {

    async execute() {
        const users = await prisma.user.findMany();

        return users;
    }
}
