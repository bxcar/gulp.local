$(".trigger").click(function(event) {
    event.preventDefault();
    $(".modal-common").toggleClass("show-modal");
});

$("#simple-form").submit(function(event) {
    event.preventDefault();
    $(".modal-common.thanks").toggleClass("show-modal");
});

$(".close-button").click(function(event) {
    event.preventDefault();
    $(".modal-common").toggleClass("show-modal");
});