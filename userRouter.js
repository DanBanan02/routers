import express from "express";

import { createUser } from "./controllers/createUser.js";
import { deleteUser } from "./controllers/deleteUser.js";
import { getAllUsers } from "./controllers/getAllUsers.js";
import { getUser } from "./controllers/getUser.js";
import { loginUser } from "./controllers/loginUser.js";


const router = express.Router();


router.post("/", createUser);

router.post("/login", loginUser);

router.delete("/:username", deleteUser);

router.get("/", getAllUsers);

router.get("/:username", getUser);


export default router;