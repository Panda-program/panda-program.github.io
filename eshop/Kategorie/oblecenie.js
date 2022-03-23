$('.btn-sidebar').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    $('.main').toggleClass("move");
});
$('.feat-btn').click(function () {
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});
$('.serv-btn').click(function () {
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});
$('.ucet-btn').click(function () {
    $('nav ul .ucet-show').toggleClass("show2");
    $('nav ul .third').toggleClass("rotate");
});
$('nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});