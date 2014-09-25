define(['jquery'], function ($) {
    var socialTab = function () {
        $('h1').click(function() {
            $('body').css('background', 'red');
        });
    };

    return socialTab;

});
