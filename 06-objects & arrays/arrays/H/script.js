var letter = 'abcdefghijklmnopqrstuvwxyz'.split('');

function move(word) {
    
    // split word

    var splitter = word.split("");

    // map word to letter array and add 10 to characters

    var transform = splitter.map(function (x) {
        return letter[((letter.indexOf(x) + 10)%26)];
    })

    // join letters in transform array into word

    var transformWord = transform.join("");

    return transformWord;

}