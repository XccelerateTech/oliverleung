// Write a function that takes an id as a parameter, it should look for an element with that id and remove all it’s child elements.

function getElementById(x) {
    var element = document.getElementById(x);

    console.log(element.childNodes);

    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

// contents of an element are the children - change children elements to empty strings

// function clearHTML(x) {
//     document.getElementById(x).innerHTML = " ";
// }