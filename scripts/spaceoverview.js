$(document).ready(function () {
    var tables = tableData.tables;
    for (var x in tables){
        var tableType = null;
        if (tables[x].empty){
            tableType = "greenBox";
        } else {
            tableType = "redBox";
        }
        


        $("#tableGrid").append('<div class="genericBox ' + tableType + '" id=' + tables[x].tableId + '>' + tables[x].tableId  + '</div>');
        $("#" + tables[x].tableId).click(function(event){
            var idUser = null;
            var tables = tableData.tables;
            for (var x in tables){
                if ( tables[x].tableId === parseInt(event.target.id)){
                    idUser = tables[x].userId;
                }
            }
            if (idUser !== -1){
                window.location.href = "../pages/userdetailspage.html?id="+ idUser;
            }
        });
    }
});
