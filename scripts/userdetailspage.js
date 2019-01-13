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

    $("#reportButton").click(function(){
        $(".reportContainer").css("display", "inline");
        $("#sendButt").click(function(){
            $(".reportContainer").css("display", "none");
        })
    });
});