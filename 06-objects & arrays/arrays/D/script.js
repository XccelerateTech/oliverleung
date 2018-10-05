var scores = [10.5,20.4,30.6]

var reducer = Math.floor(
    scores.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0) / scores.length
);

reducer;