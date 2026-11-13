const loginForm =
    document.getElementById("loginForm");

const userCreatedMessage =
    sessionStorage.getItem("userCreatedMessage");

    if (userCreatedMessage)
{
    // Find the login message.
    document.getElementById(
        "login_message"
    ).textContent = userCreatedMessage;

    // Remove the message.
    sessionStorage.removeItem(
        "userCreatedMessage"
    );
}


loginForm.addEventListener("submit", async (event) =>
{

    event.preventDefault();


    /* **************************
       GET LOGIN INPUTS
    ************************** */

    const username =
        document.getElementById("login_username").value;

    const password =
        document.getElementById("login_password").value;


    /* **************************
       SEND LOGIN REQUEST
    ************************** */

    const response =
        await fetch("/api/users/login",
        {
            method: "POST",

            headers:
            {
                "Content-Type": "application/json"
            },

            body:
                JSON.stringify({
                    username,
                    password
                })
        });


    const data =
        await response.json();


    /* **************************
       LOGIN FAILED
    ************************** */

    if (!response.ok)
    {
        document.getElementById(
            "login_message"
        ).textContent =
            data.message;

        return;
    }


    /* **************************
       LOGIN SUCCESSFUL
    ************************** */

    window.location.href =
    `/users/${encodeURIComponent(data.username)}`;

});