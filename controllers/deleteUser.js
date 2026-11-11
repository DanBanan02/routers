import { users } from "../store/users.store.js";


export const deleteUser = (req, res) => {
    const { username } = req.params;

    const index = users.findIndex(user => user.username === username);
    users.splice(index, 1);

    res.json({ message: "User was deleted. "});
}