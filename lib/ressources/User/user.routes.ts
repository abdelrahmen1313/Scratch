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
            //     path: `/profile`, -> baseUrl/profile
            //     method: "get",
            //     handler: [user.middleware.handler],
            // },
     
        ];
    }


  
   
}

export default UserRoutes;
