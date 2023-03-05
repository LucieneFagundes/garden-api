import { prisma } from "../../prisma";

export class ListPlantByUserService {
  async execute({ userId }: any) {
    const userExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new Error("Usuário não encontrado");
    }

    const plants = await prisma.plant.findMany({
      where: {
        userId,
      },
    });

    return plants;
  }
}
