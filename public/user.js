/* **************************
   GET NAME FROM URL
************************** */

const username =
    window.location.pathname
        .split("/")
        .pop();


/* **************************
   GET USER FROM API
************************** */

async function getUser()
{

    const response =
        await fetch(
            `/api/users/${username}`
        );


    const data =
        await response.json();


    const user =
        data.data;


    /* **************************
       CHECK USER
    ************************** */

    if (!user)
    {
        document.getElementById(
            "username_title"
        ).textContent =
            "User not found!";

        return;
    }


    /* **************************
       DISPLAY USER
    ************************** */

    document.getElementById(
        "username_title"
    ).textContent =
        user.username;


    /* **************************
       LIST OF USER CONTENT
    ************************** */

    document.getElementById(
        "username"
    ).textContent =
        user.username;


    document.getElementById(
        "email"
    ).textContent =
        user.email;


    document.getElementById(
        "adresse"
    ).textContent =
        user.adresse;

}


getUser();