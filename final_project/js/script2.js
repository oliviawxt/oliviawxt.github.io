$(document).ready(function() {


    $("button#geo_differ").click(function() {
        var table3_items = [];
        var i = 0;
        var airtable_read_endpoint =
            "https://api.airtable.com/v0/appJWWovfxpfQ27J5/%E6%95%B8%E6%93%9A?api_key=keybXfluNBh6MO4fz";
        var table3_dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key, value) {
                table3_items = [];
                table3_items.push(value.fields.district_name);
                table3_items.push(value.fields.amount);

                table3_dataSet.push(table3_items);
                console.log(table3_items);
            }); // end .each
            console.log(table3_dataSet);
            $('#table3').DataTable({
                data: table3_dataSet,
                retrieve: true,
                ordering: false,
                columns: [{
                            title: "區域名稱",
                            defaultContent: ""
                        },
                        {
                            title: "狗狗寄養所數量",
                            defaultContent: ""
                        },
                    ] // rmf columns
            }); // end dataTable

            var chart = c3.generate({

                size: {
                    height: 400,
                    width: 1060
                },
                data: {
                    columns: table3_dataSet,
                    type: 'bar',
                    labels: true
                },

                axis: {
                    x: { label: '區域名稱' },
                    y: { label: '狗狗寄養所數量' },
                },
                tooltip: {
                    grouped: false
                },

            });
            setTimeout(function() {
                chart.transform('pie', table3_dataSet);
            }, 1000);
        }); // end .getJSON
    }); // end button
}); // document ready