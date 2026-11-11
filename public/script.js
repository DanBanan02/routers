const userForm = document.getElementById("userForm");

/* Password Checker */

function checkPassword(password)
{

    const validpassword = 
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password) &&
    !/\s/.test(password);

    return validpassword;
}

/* Create User */

userForm.addEventListener("submit", async (event) =>
{
    event.preventDefault();

    /* Get Password */

    const password = document.getElementById("password_int").value;

    /* Password Checker */

    if (!checkPassword(password))
    {
        return;
    }

    const newUser = {
        username: document.getElementById("username_int").value,
        email: document.getElementById("email_int").value,
        password: document.getElementById("password_int").value,
        adresse: document.getElementById("adresse_int").value
    };

        const response =
        await fetch("/api/users",
        {
            method: "POST", 
            headers:
            {
                "content-type": "application/json"
            },

            body: JSON.stringify(newUser)
        });

        const data = await response.json();

        console.log(data);

        if (response.ok)
        {
            window.location.href =
                `/users/${newUser.username}`;
        }
});