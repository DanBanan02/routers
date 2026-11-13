
import { users } from "../store/users.store.js";

export const getUser = (req, res) =>
{
    /* CHECK IF USER IS LOGGED IN */

    if (!req.session.username)
    {
        return res.status(401).json({
            message: "You must log in first."
        });
    }

    /* GET REQUESTED USERNAME */

    const { username } = req.params;

    /* CHECK IF USER IS ALLOWED ACCESS */

    if (req.session.username !== username)
    {
        return res.status(403).json({
            message: "Access denied."
        });
    }

    /* FIND USER */

    const user = users.find(
        (user) => user.username === username
    );

    if (!user)
    {
        return res.status(404).json({
            message: "User not found."
        });
    }

    /* RETURN SAFE USER INFORMATION */

    return res.status(200).json({
        data: {
            username: user.username,
            email: user.email,
            adresse: user.adresse
        }
    });
};
