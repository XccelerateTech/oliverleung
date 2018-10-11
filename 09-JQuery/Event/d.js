// Target name input box (via placeholder) and action
// For simplicity, create additional classes for contact section inputs

    //need to target specific event
$('.name').keydown(function(event) {
    // Condition for the targeted element - string value exceeding 50 {response}
    if(event.target.value.length > 50) {
        $(this).css("borderColor", "red");
        alert("Too many characters entered");
        // Added so that user isn't stuck after clicking alert
        return $(this).val("Name");
    } else {
        $(this).css("borderColor", "initial");
        return $(this).val();
    }
})

// Target phone input box (via placeholder) and action

// Blur - action triggers when selected element loses focus
//need to target specific event

$('.phone').blur(function(event) {
    if(event.target.value.length < 6 || event.target.value.length > 16 || isNaN(event.target.value)) {
        $(this).css("borderColor", "red");
    } else {
        $(this).css("borderColor", "initial");
    }
})

// When I click on the row of the contact list, the values of the contact list should be filled in to the update form.

// Target contact list on click - targeting specific row - iterating over each value

$('#contact-list').on('click', '.row', function(e){
    var rowElements = $(this).children();

    // slice all elements of an array - currently is an empty array
    var updateFormElements = $('#form2 input').slice(0,rowElements.length);

    for(i = 0; i < rowElements.length; i++) {
        // fill the update form array with rowElement innermost values
        $(updateFormElements[i]).val($(rowElements[i]).html());
    }
    // further clarification - .prop( propertyName, function )
    // when filling in form2, from the contact list we are explicitly returning content with attribute id by targeting property row-id
    $('#form2').prop('row-id',$(this).attr('id'));
});

// check the number of rows in our table - .find similar to .children except it has deeper scope
let rowIdCounter = $('#contact-list tbody').find('tr').length;

// universal form submit
// create shared form .class

// target forms with submit event
$('.contact-form').submit(function(event){
    // add preventDefault - stops submit from reloading the page
    // parameter set to the event of the submit
    event.preventDefault();
    // getting all info from the user and adding it into new variables created
    // if the form that is filled is form1, form1 is the target vice versa
    var formID = event.target.id;
    var name = event.target.name.value;
    var phone = event.target.phone.value;
    var email = event.target.email.value;

    const row = $(`
        <tr class="row">
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        </tr>`
    );

    // deal with the actual form submission
    if(formID === 'form1') {
        // new submission adds to the row-id count
        $(row).attr("id", `row-${rowIdCounter++}`);
        // append the object row
        $('tbody').append(row);
        // reset fields after submission
        $(this).find('.clear').click();
    } else {
        $(row).attr("id", $(this).prop('row-id'));
        $('#'+$(this).prop('row-id')).replaceWith(row);
    }
    // Alert the input of name , phone number and email after both forms are submitted and validated.
    alert(`Name is ${name}, Phone is ${phone}, Email is ${email}`);
});