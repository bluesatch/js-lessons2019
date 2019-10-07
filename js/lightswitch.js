$(document).ready(function() {
    // do stuff
    let output = document.getElementById('message');
    $('.lightswitch').click(function(){
        // do stuff
        if ($('.white').length) {
            $('.black').removeClass( 'white');
            output.innerText = "Turn the lights on!";
        } else {
            $('.black').addClass('white');
            output.innerText = "Turn the lights off!";
        }
    })

});