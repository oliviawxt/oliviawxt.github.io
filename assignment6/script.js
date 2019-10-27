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
        var airtable_read_endpoint = "https://api.airtable.com/v0/appeJ7kiwXghpzCJK/Table%201?api_key=keyI6f6RrRjwlME9N";
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

            $('#table1').DataTable({
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

}); // document ready