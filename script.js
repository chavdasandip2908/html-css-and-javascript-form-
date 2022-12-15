function uservalidation() {
    var user = document.getElementById("user").value;
    var username = document.getElementById("username");

    if (user == "") {
        username.innerHTML = "!! Please fill the username field";
    }
    else if (user.length <= 4 || user.length > 20) {
        username.innerHTML = "!! Username lenght must be between 2 and 20";
    }
    else if (!isNaN(user)) {
        username.innerHTML = "!! only characters are allowed";
    }
    else {
        username.innerText = "";
        return true;
    }
    return false;
}
/*
Parameter : No
Description : Password below validation
1. empty check

*/
function passvalidation() {
    var pass = document.getElementById("pass").value.trim();
    var errpass = document.getElementById("passwords");
    var pass_number = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var pass_U_character = /^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var pass_L_character = /^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var special_charavter = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (pass == "" || pass == null) {

        errpass.innerHTML = " !! Please fill the password field";
    }
    else if (pass.length <= 6 || pass.length > 16) {
        errpass.innerHTML = "!! Passwords lenght must be between  6 and 16";
    }
    else if (!(pass_number.test(pass))) {
        errpass.innerHTML = "!! enter min one number ";
    }
    else if (!(pass_U_character.test(pass))) {
        errpass.innerHTML = "!! enter min one uppercase character ";

    } else if (!(pass_L_character.test(pass))) {
        errpass.innerHTML = "!! enter min one lowercase charater ";
    } else if (!(special_charavter.test(pass))) {
        errpass.innerHTML = "!! enter min one special character ";
    } else {
        errpass.innerText = "";
        return true;
    }
    return false;
}

function wholeFormValidate(event) {
    if (uservalidation() != true && passvalidation() != true) {
        event.preventDefault();
        return false;
    }
    return true;
}