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
import { AuthenticateUserController } from "./controllers/User/AuthenticateUserController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { EditUserController } from "./controllers/User/EditUserController";
import { FindUserController } from "./controllers/User/FindUserController";
import { ListUserController } from "./controllers/User/ListUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


const routes = Router();

const createUserController = new CreateUserController();
const editUserController = new EditUserController();
const listUserController = new ListUserController();
const authenticateUserController = new AuthenticateUserController();
const findUserController = new FindUserController();

const createPlantController = new CreatePlantController();
const editPlantController = new EditPlantController();
const listPlantByUserController = new ListPlantByUserController();
const deletePlantController = new DeletePlantController();

const createActivityController = new CreateActivityController();
const editActivityController = new EditActivityController();
const listActivityByPlantController = new ListActivityByPlantController();
const deleteActivityController = new DeleteActivityController();
const updateEventActivityController = new UpdateEventActivityController();


routes.get('/users', ensureAuthenticated, listUserController.handle);
routes.post('/users', createUserController.handle);
routes.patch('/user', ensureAuthenticated, editUserController.handle);
routes.post('/login', authenticateUserController.handle);
routes.get('/user/:id', ensureAuthenticated, findUserController.handle)

routes.get('/plants/:id', ensureAuthenticated, listPlantByUserController.handle);
routes.post('/plants', ensureAuthenticated, createPlantController.handle);
routes.patch('/plant', ensureAuthenticated, editPlantController.handle);
routes.delete('/plant/:id', ensureAuthenticated, deletePlantController.handle);

routes.get('/activities/:id', ensureAuthenticated, listActivityByPlantController.handle);
routes.post('/activities', ensureAuthenticated, createActivityController.handle);
routes.put('/activities-update-event/:id', ensureAuthenticated, updateEventActivityController.handle);
routes.patch('/activity', ensureAuthenticated, editActivityController.handle);
routes.delete('/activity/:id', ensureAuthenticated, deleteActivityController.handle);


export { routes }