$(function() {
    // calling JSON data via AJAX
    $.ajax({
        url:"../server/data.json",
        beforeSend:function(xhr){},
        type:"GET",
    
    // function to execute when data call is done
    }).done(function(data){
            console.log(data);
            console.log("This function will be run if the ajax is successful");
        }).fail(function(data){
            console.log("This function will be run if the ajax fails");
        }).always(function(data){
            console.log("This function runs no matter success or failure.");
        });
})