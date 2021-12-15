$(window).on('load', function () {
    setTimeout(function () {
        $('.loader').fadeOut('slow', function () {
            $('.grid').show();
        });
    }, 1000);
});