import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "../../prisma";

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IRequest) {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("Usuário ou senha inválido");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Usuário ou senha inválido");
    }

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
