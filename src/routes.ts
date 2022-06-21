import { Router } from "express";
import { createActivityController } from "./use-cases/CreateActivity";
import { createPlantController } from "./use-cases/CreatePlant";
import { createUserController } from "./use-cases/CreateUser";
import { listActivityByPlantController } from "./use-cases/ListActivity";
import { listPlantByUserController } from "./use-cases/ListPlant";
import { listUserController } from "./use-cases/ListUser";
import { updateEventActivityController } from "./use-cases/UpdateEventActivity";

const routes = Router();


routes.get('/users', listUserController.handle);
routes.post('/users', createUserController.handle);

routes.get('/plants/:id', listPlantByUserController.handle);
routes.post('/plants', createPlantController.handle);

routes.get('/activities/:id', listActivityByPlantController.handle);
routes.post('/activities', createActivityController.handle);

routes.put('/activities-update-event/:id', updateEventActivityController.handle);


export { routes }