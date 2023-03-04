import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../prisma";
import { ICreatePlant } from "../Plant/CreatePlantService";

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password }: ICreateUser) {
    const alreadyExists = await prisma.user.findFirst({
      where: { email },
    });

    if (alreadyExists) {
      throw new Error(`E-mail já cadastrado.`);
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        active: true,
      },
    });

    const token = sign({}, "T0P$3cr3T", {
      subject: user.id,
      expiresIn: "6h",
    });

    return {
      token: {
        token,
        id: user.id,
      },
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        photo: user.photo,
      },
    };
  }
}
