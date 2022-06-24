import { Router } from "express";
import { CreateActivityController } from "./controllers/Activity/CreateActivityController";
import { DeleteActivityController } from "./controllers/Activity/DeleteActivityController";
import { EditActivityController } from "./controllers/Activity/EditActivityController";
import { ListActivityByPlantController } from "./controllers/Activity/ListActivityByPlantController";
import { UpdateEventActivityController } from "./controllers/Activity/UpdateEventActivityController";
import { CreatePlantController } from "./controllers/Plant/CreatePlantController";
import { DeletePlantController } from "./controllers/Plant/DeletePlantController";
import { EditPlantController } from "./controllers/Plant/EditPlantController";
import { ListPlantByUserController } from "./controllers/Plant/ListPlantByUserController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { EditUserController } from "./controllers/User/EditUserController";
import { ListUserController } from "./controllers/User/ListUserController";


const routes = Router();

const createUserController = new CreateUserController();
const editUserController = new EditUserController();
const listUserController = new ListUserController();

const createPlantController = new CreatePlantController();
const editPlantController = new EditPlantController();
const listPlantByUserController = new ListPlantByUserController();
const deletePlantController = new DeletePlantController();

const createActivityController = new CreateActivityController();
const editActivityController = new EditActivityController();
const listActivityByPlantController = new ListActivityByPlantController();
const deleteActivityController = new DeleteActivityController();
const updateEventActivityController = new UpdateEventActivityController();


routes.get('/users', listUserController.handle);
routes.post('/users', createUserController.handle);
routes.patch('/user', editUserController.handle);

routes.get('/plants/:id', listPlantByUserController.handle);
routes.post('/plants', createPlantController.handle);
routes.patch('/plant', editPlantController.handle);
routes.delete('/plant/:id', deletePlantController.handle);

routes.get('/activities/:id', listActivityByPlantController.handle);
routes.post('/activities', createActivityController.handle);
routes.put('/activities-update-event/:id', updateEventActivityController.handle);
routes.patch('/activity', editActivityController.handle);
routes.delete('/activity/:id', deleteActivityController.handle);


export { routes }