$(document).ready(function() {

    $("a#acting").click(function() {
        $("#act").slideToggle(300);
    });

    $("a#coming").click(function() {
        $("#come").slideToggle(300);
    });

    $("a#purchase").click(function() {
        $("#info").slideToggle(300);
    });

});

var items = [];
var i = 0;
var airtable_read_endpoint = "https://api.airtable.com/v0/appGux42PODfYM65d/%E6%8E%A8%E8%8D%90%E6%A6%9C%E5%8D%95?api_key=keyFmAJ2vrBSZ6kZH";
var dataSet = [];
$.getJSON(airtable_read_endpoint, function(result) {
$.each(result.records, function(key, value) {
    items = [];
    items.push(value.fields.音乐剧名称);
    items.push(value.fields.评价数量);
    items.push(value.fields.获奖数量);
    items.push(value.fields.好评率);
    items.push(value.fields.推荐程度);
}); // end .each
$("#table1").DataTable({
    data: dataSet,
    scrollY: '100vh',
    "scrollX": true,
    scrollCollapse: true,
    retrieve: true,
    columns: [{
            title: "音乐剧名称",
            defaultContent: ""
        },
        {
            title: "评价数量",
            defaultContent: ""
        },
        {
            title: "获奖数量",
            defaultContent: ""
        },
        {
            title: "好评率",
            defaultContent: ""
        },
        {
            title: "推荐程度",
            defaultContent: ""
        },

    ],



});
}); // end .getJSON
}); // end button