// some js for docs
$(function () {
    var togglebtn = $('.toggle-btn');

    togglebtn.click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });
});