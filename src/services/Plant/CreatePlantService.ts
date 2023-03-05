import { prisma } from "../../prisma";
import { empty } from "../../utils/utils";

export interface ICreatePlant {
  name: string;
  species?: string;
  photo?: string;
  notes?: string;
  userId: string;
}

export class CreatePlantService {
  async execute({ name, species, photo, notes, userId }: ICreatePlant) {
    species = empty(species);
    notes = empty(notes);
    photo = empty(photo);

    const plantAlreadyExists = await prisma.user.findFirst({
      where: {
        id: userId,
        AND: {
          plants: {
            some: {
              name: name,
            },
          },
        },
      },
    });

    if (plantAlreadyExists) {
      throw new Error(
        "Você já cadastrou uma plantinha com esse nome. Coloque um nome diferente."
      );
    }

    const plant = await prisma.plant.create({
      data: {
        name,
        species,
        photo,
        notes,
        userId,
      },
    });

    return plant;
  }
}
