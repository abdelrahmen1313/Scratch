import type {Controller}
from "../../core/Interfaces/Controller.interface.js";
import {Router} from "express";
import type {Route}
from "../../core/Interfaces/Route.interface.js";
import UserRoutes from "./user.routes.js";

class UserController implements Controller {
    public path = "/user";
    public router = Router();
    private routes : Route[];

    constructor(userRoutes : UserRoutes = new UserRoutes()) {
        this.routes = userRoutes.getRoutes();
        this.initiateRoutes();
    }

    private initiateRoutes() : void {
        this.routes.forEach((route) => {
            const routePath = route.path.startsWith("/")
                ? route.path
                : `/${route.path}`;

            this.router[route.method](this.path + routePath, ...route.handler);
        });
    }
}

export default UserController;