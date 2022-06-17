import { Router } from "express";
import { createActivityController } from "./use-cases/CreateActivity";
import { createPlantController } from "./use-cases/CreatePlant";
import { createUserController } from "./use-cases/CreateUser";
import { listPlantByUserController } from "./use-cases/ListPlant";
import { listUserController } from "./use-cases/ListUser";

const routes = Router();


routes.get('/users', listUserController.handle);
routes.post('/users', createUserController.handle);

routes.get('/plants/:id', listPlantByUserController.handle);
routes.post('/plants', createPlantController.handle);

routes.post('/activities', createActivityController.handle);



export { routes }