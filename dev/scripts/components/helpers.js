/* helpers */

/* add overlay button */

$(document).ready(function() {
    $("body").append("<div class='icon-grid'></div>");
    $("body").append("<div class='icon-sections'></div>");
    $("body").append("<div class='overlay'><div class='row'></div></div>");
    $(".icon-grid").on("click", function() {
        $("body").toggleClass("has-debug_overlay");
    });
    $(".icon-sections").on("click", function() {
        $("body").toggleClass("has-sections_overlay");
    });
});
