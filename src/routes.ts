import { Router } from "express";
import { CreateActivityController } from "./controllers/Activity/CreateActivityController";
import { DeleteActivityController } from "./controllers/Activity/DeleteActivityController";
import { EditActivityController } from "./controllers/Activity/EditActivityController";
import { ListActivityByPlantController } from "./controllers/Activity/ListActivityByPlantController";
import { UpdateEventActivityController } from "./controllers/Activity/UpdateEventActivityController";
import { CreatePlantController } from "./controllers/Plant/CreatePlantController";
import { DeletePlantController } from "./controllers/Plant/DeletePlantController";
import { EditPlantController } from "./controllers/Plant/EditPlantController";
import { FindPlantController } from "./controllers/Plant/FindPlantController";
import { ListPlantByUserController } from "./controllers/Plant/ListPlantByUserController";
import { AuthenticateUserController } from "./controllers/User/AuthenticateUserController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { EditUserController } from "./controllers/User/EditUserController";
import { FindUserController } from "./controllers/User/FindUserController";
import { ListUserController } from "./controllers/User/ListUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import FindActivityController from "./controllers/Activity/FindActivityController";

const routes = Router();

const createUserController = new CreateUserController();
const editUserController = new EditUserController();
const listUserController = new ListUserController();
const authenticateUserController = new AuthenticateUserController();
const findUserController = new FindUserController();
const listPlantByUserController = new ListPlantByUserController();

const createPlantController = new CreatePlantController();
const editPlantController = new EditPlantController();
const findPlantController = new FindPlantController();
const deletePlantController = new DeletePlantController();

const createActivityController = new CreateActivityController();
const findActivityController = new FindActivityController();
const editActivityController = new EditActivityController();
const listActivityByPlantController = new ListActivityByPlantController();
const deleteActivityController = new DeleteActivityController();
const updateEventActivityController = new UpdateEventActivityController();

routes.post("/login", authenticateUserController.handle);

routes.post("/user", createUserController.handle);
routes.get("/user", ensureAuthenticated, listUserController.handle);
routes.patch("/user", ensureAuthenticated, editUserController.handle);
routes.get("/user/:id", ensureAuthenticated, findUserController.handle);
routes.get("/plants/:userId", ensureAuthenticated, listPlantByUserController.handle); //TODO : Modificar nome da rota

routes.post("/plant", ensureAuthenticated, createPlantController.handle);
routes.get("/plant/:id", ensureAuthenticated, findPlantController.handle);
routes.patch("/plant", ensureAuthenticated, editPlantController.handle);
routes.delete("/plant/:id", ensureAuthenticated, deletePlantController.handle);

routes.get(
  "/activities/:id",
  ensureAuthenticated,
  listActivityByPlantController.handle
);
routes.get("/activity/:id", ensureAuthenticated, findActivityController.handle);
routes.post(
  "/activities",
  ensureAuthenticated,
  createActivityController.handle
);
routes.put(
  "/activities-update-event/:id",
  ensureAuthenticated,
  updateEventActivityController.handle
);
routes.put("/activity/:id", ensureAuthenticated, editActivityController.handle);
routes.delete(
  "/activity/:id",
  ensureAuthenticated,
  deleteActivityController.handle
);

export { routes };
