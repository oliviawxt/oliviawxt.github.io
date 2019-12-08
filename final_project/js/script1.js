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

    $("a#analysis").click(function() {
        $("#ana").slideToggle(300);
    });
    $("button#show_sites").click(function() {
        $("#gov_sites").slideToggle(300);
    });

    $("button#get_location").click(function() {
        $("#data_map").slideToggle(300);
    });

});