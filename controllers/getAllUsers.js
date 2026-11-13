
export const getAllUsers = (req, res) =>
{
    /* 1. CHECK LOGIN STATUS */

    if (!req.session?.username)
    {
        return res.status(401).json({
            message: "You must log in first."
        });
    }

    /* 2. BLOCK ACCESS TO ALL USERS */

    return res.status(403).json({
        message: "You do not have permission to view all users."
    });
};
