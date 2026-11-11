import { users } from "../store/users.store.js";


export const getAllUsers = (req, res) => {
    res.json({ error: "Noe gikk galt...", data: users })
}