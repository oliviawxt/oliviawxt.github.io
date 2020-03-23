$.extend($.fn.dataTable.FixedHeader, {
    responsive: true
});

$(document).ready(function() {

    var table = $('#myTable').DataTable({
        /* rowReorder: {
        selector: 'td:nth-child(2)'
        }, */
        responsive: true,
        dom: 'Bfrtip',
        select: true,
        buttons: [{
                text: 'Update Show',
                action: function(e, dt, node, config) {
                    recEntry = dt.row({ selected: true }).data();
                    openForm(recEntry, 'update');
                },
                enabled: false
            },
            {
                text: 'Delete Show',
                action: function(e, dt, node, config) {
                    recEntry = dt.row({ selected: true }).data();
                    openForm(recEntry, 'delete');
                },
                enabled: false
            },
            {
                text: 'Add button',
                action: function(e, dt, node, config) {
                    // alert( 'Button activated' );
                    recEntry = []
                    openForm(recEntry, 'add');
                }
            }
        ]
    });

    table.on('select deselect', function() {
        var selectedRows = table.rows({ selected: true }).count();

        table.button(0).enable(selectedRows === 1);
        table.button(1).enable(selectedRows > 0);
    });

});

function openForm(recEntry, whichForm) {

    if (whichForm == 'add') {
        $("#myAddForm").modal();
        // document.getElementById("add_show_id").value = recEntry[0];
        document.getElementById("add_音乐剧名称").value = '';
        document.getElementById("add_类型").value = '';
        document.getElementById("add_最新卡司").value = '';
        document.getElementById("add_评价").value = '';
        // document.getElementById("add_record_id").value = recEntry[0];
    } else if (whichForm == 'update') {
        $("#myUpdateForm").modal();
        document.getElementById("upd_show_id").value = recEntry[0];
        document.getElementById("upd_音乐剧名称").value = recEntry[1];
        document.getElementById("upd_类型").value = recEntry[2];
        document.getElementById("upd_最新卡司").value = recEntry[3];
        document.getElementById("upd_评价").value = recEntry[4];
        document.getElementById("upd_record_id").value = recEntry[0];
    } else {
        $("#myDeleteForm").modal();
        document.getElementById("del_show_id").value = recEntry[0];
        document.getElementById("del_音乐剧名称").value = recEntry[1];
        document.getElementById("del_类型").value = recEntry[2];
        document.getElementById("del_最新卡司").value = recEntry[3];
        document.getElementById("del_评价").value = recEntry[4];
        document.getElementById("del_record_id").value = recEntry[0];
    }
}

function closeForm(whichForm) {

    if (whichForm == 'add') {
        document.getElementById("myAddForm").style.display = "none";
    } else if (whichForm == 'update') {
        document.getElementById("myUpdateForm").style.display = "none";
    } else {
        document.getElementById("myDeleteForm").style.display = "none";
    }
}