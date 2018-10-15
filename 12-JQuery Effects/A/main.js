$(function(){ // on document ready

    // before initializing the click event, we want to establish a player identifier
    // turn based, so we set it to the first player and will later hand it back and forth through the if statement

    let player = 1;
    // target squares and use click event
    $('.square').click(function(event) {
    
    // we want to fill the squares with either an X or O, and also check to make sure the cell is empty first.

        // alert('You have clicked this square');

        // lets us target the individual square element clicked on
        let selectedSquare = $(this);

        // check X or O
        if(selectedSquare.hasClass('fas fa-times') || selectedSquare.hasClass('far fa-circle')) {
            alert("You can't select this square");
        } else {
            // first check who the player is
            if(player === 1) {
                selectedSquare.addClass('fas fa-times');
                
                if (didPlayerWin('fas fa-times')) { // if true or false
                    // response if they won
                    alert(`Player ${player} has won!`)
                } else {
                // handover turn
                player = 2;
                }
            } else {
                selectedSquare.addClass('far fa-circle');
                if (didPlayerWin('far fa-circle')) {
                    alert(`Player ${player} has won!`)
                } else {
                player = 1;
                }
            }
        }
    });

    // create our logic for determining win
    function didPlayerWin(symbol) {
        // horizontal
        if ($('#sq-0').hasClass(symbol) && $('#sq-1').hasClass(symbol) && $('#sq-2').hasClass(symbol)) {
            return true;            
        } else if (($('#sq-3').hasClass(symbol) && $('#sq-4').hasClass(symbol) && $('#sq-5').hasClass(symbol))) {
            return true;
        } else if (($('#sq-6').hasClass(symbol) && $('#sq-7').hasClass(symbol) && $('#sq-8').hasClass(symbol))) {
            return true;
        // diagonal
        } else if (($('#sq-0').hasClass(symbol) && $('#sq-4').hasClass(symbol) && $('#sq-8').hasClass(symbol))) {
            return true;
        } else if (($('#sq-2').hasClass(symbol) && $('#sq-4').hasClass(symbol) && $('#sq-6').hasClass(symbol))) {
            return true;
        // vertical
        } else if (($('#sq-0').hasClass(symbol) && $('#sq-3').hasClass(symbol) && $('#sq-6').hasClass(symbol))) {
            return true;
        } else if (($('#sq-1').hasClass(symbol) && $('#sq-4').hasClass(symbol) && $('#sq-7').hasClass(symbol))) {
            return true;
        } else if (($('#sq-2').hasClass(symbol) && $('#sq-5').hasClass(symbol) && $('#sq-8').hasClass(symbol))) {
            return true;
        } else {
            return false;
            }
        }
})