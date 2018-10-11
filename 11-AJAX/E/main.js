//  creat a variable for today/yesterday/tomorrow

$(function () {

    $('#form').on('submit', function(event) {
        event.preventDefault();

        let lngLatData = $('#form').serialize();

        // get the value of the new date instance, get the value and adjust for 24 hours
        let oldDay = new Date(new Date().getTime() - 86400 * 1000);
        let nextDay = new Date(new Date().getTime() + 86400 * 1000);

        // better practice to use when - this elimi nates the issues of local vs global scope
        callApi(new Date(), lngLatData, today => {
            callApi(oldDay, lngLatData, yesterday => {
                callApi(nextDay, lngLatData, tomorrow => {

                    let sunriseTime = [new Date(today.sunrise), new Date(tomorrow.sunrise), new Date(yesterday.sunrise)];

                    let sunsetTime = [new Date(today.sunset), new Date(tomorrow.sunset), new Date(yesterday.sunset)];

                    let now = new Date();
                    
                    // find value in the corresponding array
                    // returns tomorrow sunrise
                    let nextSunrise = sunriseTime.find(function(sunrise) {
                        return (sunrise - now) > 0;
                    });

                    let nextSunset = sunsetTime.find(function(sunset) {
                        return (sunset - now) > 0;
                    });

                    let pastSunrise = sunriseTime.filter(function(sunrise) {
                        return (now - sunrise) > 0
                        }).sort(); // if there are two elements returned, always take the latest value

                    console.log(pastSunrise);

                    let pastSunset = sunsetTime.filter(function(sunset) {
                            return (now - sunset) > 0
                        }).sort();
                    
                    //If the current day, the sunrise/sunset events have passed, it'll return two elements
                    let previousSunrise = pastSunrise[0];
                    let previousSunset = pastSunset[0];

                    $('#times').append("The time difference between previous sunrise and now is " + toHHMMSS(now - previousSunrise) + '<br/>');

                    $('#times').append("The time difference between previous sunset and now is " + toHHMMSS(now - previousSunset) + '<br/>');

                    $('#times').append("The time difference between next sunrise and now is " + toHHMMSS(nextSunrise - now) + '<br/>');

                    $('#times').append("The time difference between next sunset and now is " + toHHMMSS(nextSunset - now) + '<br/>');

                    // Yesterday and today
                    
                    //If today's next sunset hasn't occurred yet, then tomorrow's sunset is not the same value

                    $('#times').append("The time difference between between tomorrow next sunrise and now is " + toHHMMSS(new Date(tomorrow.sunrise) - now) + '<br/>');

                    $('#times').append("The time difference between between tomorrow next sunset and now is " + toHHMMSS(new Date(tomorrow.sunset) - now) + '<br/>');

                    $('#times').append("The time difference between between yesterdays previous sunrise and now is " + toHHMMSS(now - new Date(yesterday.sunrise)) + '<br/>');

                    $('#times').append("The time difference between between yesterdays previous sunset and now is " + toHHMMSS(now - new Date(yesterday.sunset)) + '<br/>');




                })
            })
        })
    })
});

function callApi(date, latLng, callback) {
    $.ajax({
        type: 'GET',
        // using date methods - remembering to also account for API date formatting
        url: `https://api.sunrise-sunset.org/json?${latLng}&date=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}&formatted=0`,
        dataType: 'json',
    }).done(function (response) {
        console.log(response);
        callback(response.results);
    }).fail(function (response) {

        console.log('error ', err);
    });
}

// maths logic for converting milliseconds into HH:MM:SS format

function toHHMMSS(milliseconds) {
    let seconds = milliseconds / 1000;
    let hourDisplayed = Math.floor(seconds / 3600) + "";
    let minuteDisplayed = Math.floor(seconds % 3600 / 60) + "";
    let secondsDisplayed = (seconds % 60).toFixed(0) + "";
    return `${hourDisplayed.padStart(2, '0')}:${minuteDisplayed.padStart(2, '0')}:${secondsDisplayed.padStart(2, '0')}`;
}

// Calculate whether the day length of the position of that latitude and longitude is longer or shorter than Hong Kong’s day length at this moment.

$('#btn').on('click', function (event) {
    event.preventDefault();

    callApi(new Date(), $('#form').serialize(), inputPlace => {
        callApi(new Date(), 'lat=22.25&lng=114.17', hongKong => {

            let hongKongDiff = new Date(hongKong.sunset) - new Date(hongKong.sunrise);

            let inputPlaceDiff = new Date(inputPlace.sunset) - new Date(inputPlace.sunrise);

            if (inputPlaceDiff > hongKongDiff) {
                alert('Your input has a longer day than HK');
            } else if (inputPlaceDiff < hongKongDiff) {
                alert('Your input has a shorter day than HK');
            } else {
                alert('Are these the same places?');
            }
        })
    })
})