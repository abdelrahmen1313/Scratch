import { stamp } from "./stamp.js";

console.log(stamp)

// --------- PROGRAM STARTS ----------------///
import { App } from "./app.js";
import UserController from "./ressources/User/user.controller.js";

const app = new App(
    [
        new UserController()
    ],
     Number(process.env.PORT) || 3003
)

app.listen();