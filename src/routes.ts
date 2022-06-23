import { Router } from "express";
import { CreateActivityController } from "./controllers/CreateActivityController";
import { CreatePlantController } from "./controllers/Plant/CreatePlantController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ListActivityByPlantController } from "./controllers/ListActivityByPlantController";
import { ListPlantByUserController } from "./controllers/Plant/ListPlantByUserController";
import { ListUserController } from "./controllers/User/ListUserController";
import { UpdateEventActivityController } from "./controllers/UpdateEventActivityController";
import { EditUserController } from "./controllers/User/EditUserController";
import { EditPlantController } from "./controllers/Plant/EditPlantController";

const routes = Router();

const createActivityController = new CreateActivityController();
const createPlantController = new CreatePlantController();
const createUserController = new CreateUserController();
const listActivityByPlantController = new ListActivityByPlantController();
const listPlantByUserController = new ListPlantByUserController();
const listUserController = new ListUserController();
const updateEventActivityController = new UpdateEventActivityController();

const editUserController = new EditUserController();
const editPlantController = new EditPlantController();


routes.get('/users', listUserController.handle);
routes.post('/users', createUserController.handle);
routes.patch('/user', editUserController.handle);

routes.get('/plants/:id', listPlantByUserController.handle);
routes.post('/plants', createPlantController.handle);
routes.patch('/plant', editPlantController.handle);

routes.get('/activities/:id', listActivityByPlantController.handle);
routes.post('/activities', createActivityController.handle);
routes.put('/activities-update-event/:id', updateEventActivityController.handle);


export { routes }