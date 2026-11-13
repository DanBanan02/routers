export const logoutUser = (req, res) => 
{
    req.session.destroy((error) => 
    {
        if (error)
        {
            return res.status(500).json({
                message: "could not logout."
            });
        }

        res.clearCookie("connect.sid");

        return res.status(200).json({
            message: "logged out"
        });
    });
};