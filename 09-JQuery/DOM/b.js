// Reusing the file downloaded for the previous page. Try to do the following thing in the console of the developer tools in Javascript , not adding to the html.

// Adding a contact to the contact list
// Name: Peter
// telephone: 123456789
// email: peter@gmail.com`

$('table').append('<tr class="row"><td>Peter</td><td>123456789</td><td>peter@gmail.com</td></tr>')

// Adding an extra button to the form called Clear

$('#row-submit').append(`<input type='reset' value='clear'/>`)

// Change the title of the page to <Your name>'s contact list application

$('#header').html(`<h1>Oliver's contact list application</h1>`)

// Change the color of the text in the contact list.

$('#contact-list table').css("color","red");