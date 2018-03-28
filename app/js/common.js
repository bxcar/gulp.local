$(document).ready(function () {
    /*$(".trigger").click(function (event) {
        event.preventDefault();
        $(".modal-common").toggleClass("show-modal");
    });*/

    $(".trigger-video-1").click(function (event) {
        event.preventDefault();
        $(".modal-common.video1").toggleClass("show-modal");
    });

    $(".trigger-video-2").click(function (event) {
        event.preventDefault();
        $(".modal-common.video2").toggleClass("show-modal");
    });

    $(".trigger-video-3").click(function (event) {
        event.preventDefault();
        $(".modal-common.video3").toggleClass("show-modal");
    });

    $("#simple-form").submit(function (event) {
        event.preventDefault();
        $(".modal-common.thanks").toggleClass("show-modal");
    });

    $(".close-button1").click(function (event) {
        event.preventDefault();
        $(".modal-common.video1").toggleClass("show-modal");
    });
    $(".close-button2").click(function (event) {
        event.preventDefault();
        $(".modal-common.video2").toggleClass("show-modal");
    });
    $(".close-button3").click(function (event) {
        event.preventDefault();
        $(".modal-common.video3").toggleClass("show-modal");
    });

    $("#owl-6").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<img src=\"img/photo-single-left-arrow-min.png\">", "<img src=\"img/photo-single-right-arrow-min.png\">"],
        items: 6
    });

    $("#owl-main-page-slider").owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img src=\"img/main-page-left-arrow.png\">", "<img src=\"img/main-page-right-arrow.png\">"],
        items: 1,
        singleItem: true,
        dots: true,
        dotsContainer: '#carousel-custom-dots'
    });

    $('.owl-dot').click(function () {
        $("#owl-main-page-slider").trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    /*var indexToRemove = 6;
     $("#owl-6").trigger('remove.owl.carousel', [indexToRemove]).trigger('refresh.owl.carousel');*/

    $("#owl-1").owlCarousel({
        navText: ["<img src=\"img/photo-single-left-arrow.png\">", "<img src=\"img/photo-single-right-arrow.png\">"],
        loop: true,
        nav: true,
        items: 1,
        thumbs: true,
        thumbsPrerendered: true
        // thumbImage: true,
        // thumbContainerClass: 'owl-thumbs',
        // thumbItemClass: 'owl-thumb-item'
    });
});