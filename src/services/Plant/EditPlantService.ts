import { prisma } from "../../prisma";
import { empty } from "../../utils/utils";

interface IEditPlant {
    id: string;
    name: string,
    species: string,
    photo: string,
    notes: string,
    updated_at: Date;
}

export class EditPlantService {
    async execute({ id, name, species, photo, notes, updated_at }: IEditPlant) {

        species = empty(species);
        notes = empty(notes);
        photo = empty(photo);

        const plant = await prisma.plant.findFirst({
            where: { id }
        })

        if (!plant) {
            throw new Error("Plant not found");
        }

        updated_at = new Date();

        const plantUpdated = await prisma.plant.updateMany({
            where: {
                id: plant.id,
            },
            data: {
                name,
                species,
                photo,
                notes,
                updated_at
            }
        })
        return plantUpdated;
    }
}