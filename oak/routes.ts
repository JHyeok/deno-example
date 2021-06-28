import { Router } from "./deps.ts";
import { getAllUsers } from "./controller/user.ts";

const router = new Router();

router.get("/users", getAllUsers);

export default router;
