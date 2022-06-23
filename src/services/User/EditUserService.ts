import { prisma } from "../../prisma";


interface IEditUser {
    id: string;
    name?: string;
    photo?: string;
    email?: string;
    password?: string;
}

export class EditUserService {
    
    async execute({ id, name, photo, email, password }: IEditUser) {

        const emailAlreadyExists = await prisma.user.findUnique({
            where: { 
                email,
            }
        })

        if(emailAlreadyExists){
            throw Error("Email already exists")
        }

        const user = await prisma.user.updateMany({

            where: {id},
            data: {
                name,
                photo,
                email,
                password,
            },
        })

        return user;
    }
}