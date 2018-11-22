// some js for docs
$(function () {

    $(window).on('type:changes',function () {
        var togglebtn = $('.toggle-btn');

        togglebtn.click(function (e) {
            e.preventDefault();
            $(this).next().slideToggle();
        });
    });


    $(window).trigger('type:changes')

    // $('.toggle-os').on('change',function (e) {
    //     var bodyNS = $('.wrap');
    //
    //     if($(this).is(':checked')) {
    //         var replaced = bodyNS.html().replace(/cl-switch(?!-)/g, 'cl-switch ios');
    //         bodyNS.html(replaced);
    //     }else {
    //         var replaceds = bodyNS.html().replace(/cl-switch ios/g, 'cl-switch');
    //         bodyNS.html(replaceds);
    //     }
    //
    //     $(window).trigger('type:changes')
    // })
});
