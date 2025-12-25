import type { Route } from "../../core/Interfaces/Route.interface.js";
import { mid, pong } from "./user.middleware.js";

class UserRoutes {

    
    public getRoutes(): Route[] {
        return [
            {
                path: `/ping`,
                method: "get",
                handler: [mid, pong]
            },
            // Add more routes here as needed
            // {
            //     path: `${this.basePath}/profile`,
            //     method: "get",
            //     handler: this.getProfile,
            // },
            // {
            //     path: `${this.basePath}/register`,
            //     method: "post",
            //     handler: this.register,
            // },
        ];
    }


    // Add more handler methods here
    // private getProfile = async (req: Request, res: Response): Promise<void> => {
    //     // implementation
    // };

    // private register = async (req: Request, res: Response): Promise<void> => {
    //     // implementation
    // };
}

export default UserRoutes;
