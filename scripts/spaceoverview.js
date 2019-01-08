$(document).ready(function () {
    var tables = tableData.tables;
    for (var x in tables){
        var tableType = null;
        if (tables[x].empty){
            tableType = "greenBox";
        } else {
            tableType = "redBox";
        }
        
        $("#tableGrid").append('<div class="genericBox ' + tableType + '">' + tables[x].tableId  + '</div>');
    }
});
