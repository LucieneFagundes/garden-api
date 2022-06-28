import { hash } from "bcryptjs";
import { prisma } from "../../prisma";
import { ICreatePlant } from "../Plant/CreatePlantService";

export interface ICreateUser {
    name: string;
    email: string;
    password: string;
    photo?: string;
    plants?: ICreatePlant
}

export class CreateUserService {
    async execute({ name, email, password, photo }: ICreateUser) {
        const alreadyExists = await prisma.user.findFirst({
            where: { email }
        });

        if (alreadyExists) {
            throw new Error(`User already exists.`);
        }

        const passwordHash = await hash(password, 8);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash,
                photo,
                active: true
            }
        })
        return user;
    }
}