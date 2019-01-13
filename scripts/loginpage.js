$(document).ready(function () {
    var users = tableData.users;
    $("#loginButton").click(function () {
        debugger
        var ok = false;
        var userInput = $("#usernameInput").val();
        var passInput = $("#passInput").val();

        if (userInput === "admin" && passInput === "admin") {
            window.location.href = "../pages/homepage.html";
        } else {
            for (var x in users) {
                if (users[x].username === userInput && users[x].password === passInput) {
                    ok = true;
                    break;
                }
            }
            if (ok === true) {
                $("#warning").text("");

                //aici puneti path-ul catre pagina html homepage(pentru utilzatorii normali din fisierul json) 
                window.location.href = "";
            }
            else {
                $("#warning").text("Username or password incorrect");
            }
        }


    });
});