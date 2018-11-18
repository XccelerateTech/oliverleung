$(function () { // on document ready

  // before initializing the click event, we want to establish a player identifier
  // turn based, so we set it to the first player and will later hand it back and forth through the if statement

  let player = 1;
  let i = 0;

  // target squares and use click event
  $('.square').click(function (event) {

    // we want to fill the squares with either an X or O, and also check to make sure the cell is empty first.

    // alert('You have clicked this square');

    let audio = new Audio('./assets/ricky.mp3');
    let audioh = new Audio('./assets/no-god.mp3');
    let audiyeh = new Audio('./assets/see-you-again.mp3');
    let audilute = new Audio('./assets/flute.mp3');

    // lets us target the individual square element clicked on
    let selectedSquare = $(this);

    // check X or O

    if (selectedSquare.hasClass('fas fa-times') || selectedSquare.hasClass('far fa-circle')) {
      audioh.addEventListener('ended', showAlert);
      audioh.play();
      function showAlert() {
        alert(`Don't touch that!`);
      }

      // alert("You can't select this square");
    } else {
      // first check who the player is
      if (player === 1) {
        selectedSquare.addClass('fas fa-times');
        i++;
        console.log(i);

        if (didPlayerWin('fas fa-times')) { // if true or false
          audio.addEventListener('ended', showAlert);
          audio.play();
          function showAlert() {
            if (!alert(`Player ${player} has won!`)) {
              window.location.reload();
            }
          }

          // response if they won
          // alert(`Player ${player} has won!`);
        } else {
          // handover turn
          player = 2;
        }
      } else {
        selectedSquare.addClass('far fa-circle');
        i++;
        console.log(i);

        if (didPlayerWin('far fa-circle')) {
          audiyeh.addEventListener('ended', showAlert);
          audiyeh.play();
          function showAlert() {
            if (!alert(`Player ${player} has won!`)) {
              window.location.reload();
            }
          }
        } else {
          player = 1;
        }
      }
    }
    if (i == 9 && (didPlayerWin('fas fa-times')==false) && (didPlayerWin('far fa-circle'))==false){
      console.log('No one wins');
      audilute.addEventListener('ended', showAlert);
      audilute.play();
      function showAlert() {
        if (!alert("No one wins. Play again!")) {
          window.location.reload();
        }
      }
    };
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