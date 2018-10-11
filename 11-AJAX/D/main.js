$(function() {

    $('#form').submit(function(input){
        input.preventDefault();

        // the long and lat values we have input into the form
        let lat = $('input[name=lat]').val();
        let lng = $('input[name=lng]').val();

        $.ajax(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`).done(function(data){

            console.log(data);

            let sunrise = new Date(data.results.sunrise);
            let sunset = new Date(data.results.sunset);

            console.log('Sunrise is at ' + sunrise);
            console.log('Sunset is at ' + sunset);

        })

    })
})