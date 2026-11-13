import { users} from "../store/users.store.js";

export const loginUser = (req, res) => 
{
    const {
        username,
        password
    } = req.body;

    /* Find User */
    const user = users.find((user) => user.username === username);

    /* User does not exist */
    if (!user)
    {
        return res.status(401).json({
            message: "incorrect username or password."
        });
    }

    if (user.password !== password)
    {
        return res.status(401).json({
            message: "incorrect username or password."
        });
    }

    /* Login succsessful */

        req.session.username =
            user.username;


        return res.status(200).json({
            message: "Login successful.",
            username: user.username
        });

};