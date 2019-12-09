$(document).ready(function() {

    $("#get_data").ready(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appIRhjgYeH6hJJUT/Song?api_key=keyVgAVOiOdcDu9Eh"
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key, value) {
                items = [];
                items.push(value.fields.單曲);
                items.push(value.fields.發行時間);
                items.push(value.fields.發行公司);
                items.push(value.fields.MV觀看地址);
                items.push(value.fields.備註);
                dataSet.push(items);
                console.log(items);
            }); // end .each
            console.log(dataSet);

            $('#table').DataTable({
                data: dataSet,
                retrieve: true,
                columns: [{
                        title: "單曲",
                        defaultContent: ""
                    },
                    {
                        title: "發行時間",
                        defaultContent: ""
                    },
                    {
                        title: "發行公司",
                        defaultContent: ""
                    },
                    {
                        title: "MV觀看地址",
                        defaultContent: ""
                    },
                    {
                        title: "備註",
                        defaultContent: ""
                    },
                ]
            });
        });
    });
})

$("a#calculation").click(function() {
    var table3_items = [];
    var i = 0;
    var airtable_read_endpoint =
        "https://api.airtable.com/v0/appjh6qM7NvjHbBZF/count%20chart?api_key=keyFmAJ2vrBSZ6kZH";
    var table3_dataSet = [];
    $.getJSON(airtable_read_endpoint, function(result) {
        $.each(result.records, function(key, value) {
            table3_items = [];
            table3_items.push(value.fields.推荐程度);
            table3_items.push(value.fields.总计);

            table3_dataSet.push(table3_items);
            console.log(table3_items);
        }); // end .each
        console.log(table3_dataSet);
        $('#table3').DataTable({
            data: table3_dataSet,
            retrieve: true,
            ordering: false,
            columns: [{
                        title: "推荐程度",
                        defaultContent: ""
                    },
                    {
                        title: "总计",
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
                x: { label: '推荐程度' },
                y: { label: '总计' },
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