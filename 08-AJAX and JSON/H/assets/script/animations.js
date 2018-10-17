// Once the user hovers over the 4 icons, they should increase in size by 40%, once the users mouse leaves the icons their size should decrease to normal again

let elem = document.getElementsByClassName('icon');

// iterate over each element of array
for(let e of elem) {
    e.addEventListener('mouseenter', function(){
        this.style.maxWidth = "100%";
    });
    e.addEventListener('mouseleave', function(){
        this.style.maxWidth = "60%";
    });
}

// Make the Learn More button clickable. Once the user clicks on it:
    // Remove the black overlay so that we can see the flowers clearly.
    // Change the title from ‘beautiful flowers’ to ‘welcome to my flower shop’, give the text a background and change the color to blue.
    // Change the text of the button from ‘learn more’ to ‘buy flowers’, change the background color to red.

let learn = document.getElementById('learn-more');

learn.addEventListener('click', function(){
    // If using document.getElementsByClassName, need to create an ID tag to target object. Could not remove targeted class overlay/itself - static/dynamic lists

        // let overlay = document.querySelector('.overlay');
        // let overlay = document.getElementById('overlay');
        let overlay = document.getElementsByClassName('overlay');
        // simply remove the overlay class if clicked
        console.log(overlay);
            // console.log(document.getElementsByClassName('overlay'));
        overlay.item(0).remove();

        let title = document.getElementById('title');

        title.style.backgroundColor = "blue";
        title.innerHTML = "WelCoMe tO mY fLOweR shOP";

        learn.classList.remove("btn-success");
        learn.classList.add("btn-danger");
        learn.innerHTML = "buY fLoWerS";
    })

