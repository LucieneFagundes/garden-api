import { prisma } from "../../prisma";


export class ListUserUseCase {

    async execute() {
        const users = await prisma.user.findMany();

        return users;
    }
}
