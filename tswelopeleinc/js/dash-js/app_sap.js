$(document).ready(function() {
    $(".page2").hide();
    $(".page4").hide();
    $(".page").show();
});

$(document).ready(function() {
    $("#dash").click(function() {
        $(".page2").hide();
        $(".page4").hide();
    });
    $("#dash").click(function() {
        $(".page").show();
    });
});

$(document).ready(function() {
    $("#clients").click(function() {
        $(".page").hide();
        $(".page4").hide();
    });
    $("#clients").click(function() {
        $(".page2").show();
    });
});
$(document).ready(function() {
    $("#schedule").click(function() {
        $(".page").hide();
        $(".page2").hide();
    });
    $("#schedule").click(function() {
        $(".page4").show();
    });
});