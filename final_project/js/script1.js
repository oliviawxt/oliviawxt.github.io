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

$("a#recommendation").click(function() {
    var items = [];
    var i = 0;
    var airtable_read_endpoint = "https://api.airtable.com/v0/appGux42PODfYM65d/%E6%8E%A8%E8%8D%90%E6%A6%9C%E5%8D%95?api_key=keyFmAJ2vrBSZ6kZH";
    var dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
        $.each(result.records, function(key, value) {
            items = [];
            items.push(value.fields.音乐剧名称);
            items.push(value.fields.海报);
            items.push(value.fields.类型);
            items.push(value.fields.巡演城市);
            items.push(value.fields.亮点);
            dataSet.push(items);
            console.log(items);
        }); // end .each
        console.log(dataSet);

        $('#table1').DataTable({
            data: dataSet,
            retrieve: true,
            columns: [{
                    title: "音乐剧名称",
                    defaultContent: ""
                },
                {
                    title: "海报",
                    defaultContent: ""
                },
                {
                    title: "类型",
                    defaultContent: ""
                },
                {
                    title: "巡演城市",
                    defaultContent: ""
                },
                {
                    title: "亮点",
                    defaultContent: ""
                },
            ]

        });
    }); // end .getJSON
}); // end button