$(document).ready(function () {
    ReSize();
    $(window).resize(function () {
        ReSize();
    })
})
function ReSize() {
    var val1 = $("#topNav").height();
    var piframe_h = $(parent.document).find("#iframeContent").height();
    var this_h = $(document.body).height();
    if (piframe_h != null && piframe_h < 700)
        piframe_h = 700;
    else {
        piframe_h = 0;
        this_h = $(window).height();
    }
    var div_content_h = 0;
    if (this_h >= piframe_h) {
        div_content_h = this_h - val1 - 1;
    }
    else
        div_content_h = piframe_h - val1 - 1;

    $("#map").css("height", this_h);
    $("#map").css("widht", "100%");

    $("#map_l").css("width", "100%");
    $("#map_l").css("height", this_h);

    $("#map_t").css("width", "100%"); 

    $("#div_content").css("height", div_content_h);

} 