$(document).ready(function() {

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color", "blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appeJ7kiwXghpzCJK/Imported%20table?api_key=keypNebOgWW9S70Um";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key, value) {
                items = [];
                items.push(value.fields.name);
                items.push(value.fields.location);
                items.push(value.fields.province);
                items.push(value.fields.theatre);
                items.push(value.fields.date);
                items.push(value.fields.type);
                dataSet.push(items);
                console.log(items);
            }); // end .each
            console.log(dataSet);

            $('#table').DataTable({
                data: dataSet,
                retrieve: true,
                columns: [{
                        title: "Name",
                        defaultContent: ""
                    },
                    {
                        title: "Location",
                        defaultContent: ""
                    },
                    {
                        title: "Province",
                        defaultContent: ""
                    },
                    {
                        title: "Theatre",
                        defaultContent: ""
                    },
                    {
                        title: "Date",
                        defaultContent: ""
                    },
                    {
                        title: "Type",
                        defaultContent: ""
                    },
                ]
            });
        }); // end .getJSON
    }); // end button


    $("button#get_data2").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appLrs60Hq3cBBG0e/type?api_key=keypNebOgWW9S70Um";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key, value) {
                items = [];
                items.push(value.fields.type);
                items.push(value.fields.name);
                items.push(value.fields.count);
                dataSet.push(items);
                console.log(items);
            }); // end .each
            console.log(dataSet);

            $('#table2').DataTable({
                data: dataSet,
                retrieve: true,
                columns: [{
                        title: "Type",
                        defaultContent: ""
                    },
                    {
                        title: "Name",
                        defaultContent: ""
                    },
                    {
                        title: "Count",
                        defaultContent: ""
                    },

                ]
            });

            var chart = c3.generate({
                data: {
                    columns: [
                        ['本土原创', 26],
                        ['引进原版', 9],
                        ['中文版制作', 12],
                    ],
                    type: 'donut'
                },
                donut: {
                    title: "音乐剧类型",
                }
            });

        }); // end .getJSON

    }); // end button

}); // document ready