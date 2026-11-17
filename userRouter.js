import express from "express";

import { createUser } from "./controllers/createUser.js";
import { deleteUser } from "./controllers/deleteUser.js";
import { getAllUsers } from "./controllers/getAllUsers.js";
import { getUser } from "./controllers/getUser.js";
import { loginUser } from "./controllers/loginUser.js";
import { logoutUser } from "./controllers/logoutUser.js";

import { createUserSchema } from "../schemas/createUser.schema.js";
import { updateUserSchema } from "../schemas/updateUser.schema.js";
import { validate } from "../middlewares/validate.js";


const router = express.Router();

router.post('/', validate(createUserSchema), createUser);

router.put('/:username', validate(updateUserSchema), loginUser)

router.post("/", createUser);

router.post("/login", loginUser);

router.delete("/:username", deleteUser);

router.get("/", getAllUsers);

router.get("/:username", getUser);

router.post("/logout", logoutUser);


export default router;