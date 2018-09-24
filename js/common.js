$('.slid-main').slick({
    arrows:false,
    dots:false,
    fade:true,
    autoplay:true,
    autoplaySpeed:1200
});
$('.slid-box').slick({
    arrows:true,
    dots:false,
    speed:1000
});
jQuery(document).ready(function() {
    if (jQuery(window).width() < 767) {
        $('.ic-mob-menu').click(function () {
            $('.mob-menu').fadeToggle(100);
        });
        $('.mob-menu li a').click(function () {
            $('.mob-menu').fadeOut(100);
        });
    }
});
$(document).ready(function(e, t, n){
    !function (e) {
        e(".category-item").on("click", ".subcategories-expander", function (t) {
            var n = e(this), i = n.closest(".category-item").find(".subcategories");
            i.last().is(":visible") ? (i.last().slideUp("fast"), n.text(n.data("showText"))) : (i.last().slideDown("fast"), n.text(n.data("hideText"))), t.preventDefault()
        });
    }(jQuery)
});
$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
$(".list-chat .item-chat").click(function () {
    $(".box-messege").show();
    $(".list-man-chat").hide();
});
$(".fa-arrow-left").click(function () {
    $(".box-messege").hide();
    $(".list-man-chat").show();
});
$(".top-chat-icons .fa-times").click(function () {
    $(".block-chat").hide();
});
$(".img-chat").click(function () {
    $(".block-chat").show();
});