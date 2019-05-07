$(function(){
    $("#dTable").dataTable({
        "columns": [

                {
                    "title": "Total",
                    "sortable":false,
                    "render": function(data, type, row, meta){
                        return $("<div></div>", {
                            "class": "bar-chart-bar"
                        }).append(function(){
                            var bars = [];
                            var barSize;
                            for(var i = 1; i < row.length; i++){
                                barSize= Math.abs(row[i]);
                                bars.push($("<div></div>",{
                                    "class": "bar "
                                }).css({
                                    "width": barSize + "%"
                                }))
                            }
                            return bars;
                        }).prop("outerHTML")
                    }
                }
        ]
    });
});