// Using .get()
// wrapping it in $(handler) {} - shorthand for document ready
$(function() {

    function informMe(endpoint, value) {
    $.get(`https://restcountries.eu/rest/v2/${endpoint}/${value}`, function(){
        console.log("Successful")
    })
        .done(function(data){
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
