import { Router } from "express";
import { CreateActivityController } from "./controllers/CreateActivityController";
import { CreatePlantController } from "./controllers/CreatePlantController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListActivityByPlantController } from "./controllers/ListActivityByPlantController";
import { ListPlantByUserController } from "./controllers/ListPlantByUserController";
import { ListUserController } from "./controllers/ListUserController";
import { UpdateEventActivityController } from "./controllers/UpdateEventActivityController";

const routes = Router();

const createActivityController = new CreateActivityController();
const createPlantController = new CreatePlantController();
const createUserController = new CreateUserController();
const listActivityByPlantController = new ListActivityByPlantController();
const listPlantByUserController = new ListPlantByUserController();
const listUserController = new ListUserController();
const updateEventActivityController = new UpdateEventActivityController();

routes.get('/users', listUserController.handle);
routes.post('/users', createUserController.handle);

routes.get('/plants/:id', listPlantByUserController.handle);
routes.post('/plants', createPlantController.handle);

routes.get('/activities/:id', listActivityByPlantController.handle);
routes.post('/activities', createActivityController.handle);

routes.put('/activities-update-event/:id', updateEventActivityController.handle);


export { routes }