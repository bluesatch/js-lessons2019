$(document).ready(function() {
    // do stuff
    $('.lightswitch').click(function(){
        var state = $(this).html();
        // do stuff
    
        // state of the button
        if (state === 'down') {
            $(this).html('up');
        } else {
            $(this).html('down');
        }
        // state of the light
        if ($('.white').length) {
            $('.black').removeClass('white');
            $('#message').html('Turn the lights on!');
        } else {
            $('.black').addClass('white');
            $('#message').html('Turn the lights off!');
        }

    });
});