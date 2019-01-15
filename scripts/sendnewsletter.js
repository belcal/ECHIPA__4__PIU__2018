$(document).ready(function () {

    $("#sendNews").click(function(){
        if ($("#emailClient").val().length > 0){
            window.location.href = "../pages/sendconfirmation.html";
        } else {
            $("#emailClient").attr("placeholder", "Newsletterul nu poate fi trimis gol!!!");
        }
    });

});