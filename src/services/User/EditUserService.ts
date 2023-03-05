import { hash } from "bcryptjs";
import e from "express";
import { prisma } from "../../prisma";

interface IEditUser {
  id: string;
  name?: string;
  photo?: string;
  email?: string;
  password?: string;
}

export class EditUserService {
  async execute({ id, name, photo, email }: IEditUser) {
    if (email) {
      const tempUser = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      const alreadyExists = tempUser.id === id ? false : true;

      if (alreadyExists) {
        throw Error("Email already exists");
      }
    }
    // todo : comparar senha anterior com nova senha
    // const passwordHash = await hash(password, 8);

    const user = await prisma.user.updateMany({
      where: { id },
      data: {
        name,
        photo,
        email,
        // password: passwordHash,
      },
    });

    return user;
  }
}
