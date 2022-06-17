import { prisma } from "../../prisma";
import { ICreatePlant } from "../CreatePlant/CreatePlantUseCase";

export interface ICreateUser {
    name: string;
    email: string;
    password: string;
    plants?: ICreatePlant
}

export class CreateUserUseCase {
    async execute({ name, email, password }: ICreateUser) {
        const alreadyExists = await prisma.user.findFirst({
            where: { email }
        });

        if (alreadyExists) {
            throw new Error(`User already exists.`);
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        })
        return user;
    }
}