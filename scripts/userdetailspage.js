$(document).ready(function () {
    var users = tableData.users;
    var id = window.location.search.substring(4, 5);
    var idNr = parseInt(id);
    var userDetail = null;
    for (var x in users) {
        if (users[x].id === idNr) {
            userDetail = users[x];
            break;
        }
    }

    $("#profpic").attr("src", "../assets/" + userDetail.pic);
    $("#nameField").text(userDetail.realName);
    $("#userField").text(userDetail.username);
    $("#phone").text(userDetail.phone);
    $("#mail").text(userDetail.email);

    $("#reportButton").click(function () {
        $(".reportContainer").css("display", "inline");
        $("#sendButt").click(function () {
            if ($("#raportText").val().length > 0) {
                $(".reportContainer").css("display", "none");
                alert("Raportul a fost trimis si va fi revizuit de o persoana autorizata");
            } else {
                $("#raportText").prop('placeholder', "Raportul nu poate fi trimis gol!!!");
            }
        });
    });
});