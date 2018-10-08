var http = new XMLHttpRequest();

    http.open('GET', '../server/data.json');


    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            //if the readyState is not DONE, repeat this step
            return;
            //if status returned is okay
        } else if (http.status == 200) {
            console.log(http.responseText);
        } else {
            console.log('error occurred' + http.status);
        }
    }

    // onreadystatechange should be before http.send()
    http.send();