$(document).ready(function () {


    $("#hide").click(function () {
        if ($('#email1').val()!= "") {
            $(".footer-form").hide();
            $(".thanks").show();
        };
    })
});