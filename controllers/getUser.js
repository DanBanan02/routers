import { users } from "../store/users.store.js";


export const getUser = (req, res) => {
    const { username } = req.params;

    const user = users.find(user => user.username === username);
    res.json({ data: user });
}