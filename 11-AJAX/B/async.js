$(function() {

function informMe(endpoint, value) {
    $.ajax({
        url: (`https://restcountries.eu/rest/v2/${endpoint}/${value}`),
        beforeSend:function(xhr){},
        dataType: "json",
        type:"GET",

        error: function(error) {
            console.log("API data call did not work");
        },
    // chain methods to output response
    }).done(function(data){
            console.log(data);
            console.log("This function runs if AJAX is successful");
        }).fail(function(data){
            console.log("This function runs if AJAX fails");
        }).always(function(data){
            console.log("This function runs regardless");
        });
}

informMe('name', 'Germany');

})
