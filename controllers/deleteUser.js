
import { users } from "../store/users.store.js";

export const deleteUser = (req, res) =>
{
    /* 1. CHECK LOGIN STATUS */

    if (!req.session?.username)
    {
        return res.status(401).json({
            message: "You must log in first."
        });
    }

    /* 2. GET REQUESTED USERNAME */

    const { username } = req.params;

    /* 3. CHECK ACCOUNT OWNERSHIP */

    if (req.session.username !== username)
    {
        return res.status(403).json({
            message: "You cannot delete another user's account."
        });
    }

    /* 4. CHECK IF USER EXISTS */

    const index = users.findIndex(
        (user) => user.username === username
    );

    if (index === -1)
    {
        return res.status(404).json({
            message: "User not found."
        });
    }

    /* 5. END SESSION BEFORE DELETION */

    req.session.destroy((error) =>
    {
        if (error)
        {
            return res.status(500).json({
                message: "Could not end session. Account not deleted."
            });
        }

        /* 6. DELETE THE ACCOUNT */

        const currentIndex = users.findIndex(
            (user) => user.username === username
        );

        if (currentIndex === -1)
        {
            res.clearCookie("connect.sid");

            return res.status(404).json({
                message: "User not found."
            });
        }

        users.splice(currentIndex, 1);

        /* 7. CLEAR SESSION COOKIE */

        res.clearCookie("connect.sid");

        return res.status(200).json({
            message: "Your account was deleted."
        });
    });
};
