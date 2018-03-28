var modal = $(".modal-common");
var trigger = $(".trigger");
var closeButton = $(".close-button");

trigger.click(function(event) {
    event.preventDefault();
    modal.toggleClass("show-modal");
});

closeButton.click(function(event) {
    event.preventDefault();
    modal.toggleClass("show-modal");
});