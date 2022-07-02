import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../prisma";

interface IRequest{
    email: string;
    password: string;
}

export class AuthenticateUserService {
    async execute({email, password}: IRequest){

        const user = await prisma.user.findFirst({
            where: { email }
        })

        if(!user){
            throw new Error("User or password incorrect");
        }
        
        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch) {
            throw new Error("User or password incorrect");
        }

        const token = sign({}, "T0P$3cr3T", {
            subject: user.id,
            expiresIn: "6h",
        })

        return {
            token,
            user:{
                id: user.id,
                email: user.email,
                name: user.name,
                photo: user.photo,
            }
        };
    }
}