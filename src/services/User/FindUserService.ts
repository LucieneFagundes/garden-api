import { prisma } from "../../prisma";

export class FindUserService {
  async execute(id) {
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error("Falha na requisição");
    }

    return user;
  }
}
