/* **************************
   GET USERNAME FROM URL
************************** */

const username =
    window.location.pathname
        .split("/")
        .pop();


/* **************************
   GET USER FROM API
************************** */


async function logoutUser()
{
    await fetch(
        "/api/users/logout",
        {
            method: "POST"
        }
    );

    window.location.replace(
        "/login"
    );
}

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

    if (!response.ok || !user)
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


/* **************************
   RUN USER FUNCTION
************************** */

getUser();


/* **************************
   INACTIVITY LOGOUT
************************** */

const inactivityTime =
    5 * 60 * 1000;


let inactivityTimer;


/* **************************
   LOGOUT USER
************************** */

async function logoutUser()
{

    await fetch(
        "/api/users/logout",
        {
            method: "POST"
        }
    );


    window.location.replace(
        "/login"
    );

}


/* **************************
   RESET INACTIVITY TIMER
************************** */

function resetInactivityTimer()
{

    clearTimeout(
        inactivityTimer
    );


    inactivityTimer =
        setTimeout(
            logoutUser,
            inactivityTime
        );

}


/* **************************
   USER ACTIVITY
************************** */

window.addEventListener(
    "mousemove",
    resetInactivityTimer
);


window.addEventListener(
    "keydown",
    resetInactivityTimer
);


window.addEventListener(
    "click",
    resetInactivityTimer
);


window.addEventListener(
    "scroll",
    resetInactivityTimer
);


window.addEventListener(
    "touchstart",
    resetInactivityTimer
);


/* **************************
   START TIMER
************************** */

resetInactivityTimer();