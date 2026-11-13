import { users } from "../store/users.store.js";


export const createUser = (req, res) =>
{

    /* User Requirments */
    const {
        username,
        email,
        password,
        adresse
    } = req.body;


    /* **************************
       CHECK REQUIRED FIELDS
    ************************** */

    if (
        !username ||
        !email ||
        !password ||
        !adresse
    )
    {
        return res.status(400).json({
            message:
                "Username, email, password and adresse are required."
        });
    }


    /* **************************
       CHECK EXISTING USER
    ************************** */

    const existingUser =
        users.find((user) =>
            user.username === username
        );


    if (existingUser)
    {
        return res.status(409).json({
            message:
                "Username already exists."
        });
    }


    /* **************************
       CHECK USERNAME
    ************************** */

    const validUsername =
        /^[A-Za-z0-9_-]+$/.test(username);


    if (!validUsername)
    {
        return res.status(400).json({
            message:
                "Username can only contain letters, numbers, _ and -."
        });
    }


    /* **************************
       CREATE USER
    ************************** */

    const newUser = {
        username,
        email,
        password,
        adresse
    };


    users.push(newUser);


    return res.status(201).json({
        message:
            "User created.",
        data:
            newUser
    });

};