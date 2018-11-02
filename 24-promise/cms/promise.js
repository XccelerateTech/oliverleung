// var promise = new Promise((resolve, reject) => {
//     resolve();
// });

// // this will return an object stating whether promise was resolved/rejected
// console.log(promise);

// in it's current state, if we ran with reject() above, we get an error code stating we haven't handled the error

// HANDLING ERROR MESSAGE

// var promise = new Promise((resolve, reject) => {
//     reject();
// });

// // then runs if promise is resolved
// promise.then(() => {
//     console.log('Promise resolved.');
// });

// // catch runs if promise is rejected
// promise.catch(() => {
//     console.log('An error occurred');
// });

// CHAINING .THEN() TOGETHER

// const promise = new Promise((resolve, reject) => {
//     resolve();
// });

// // code allows us to chain without having to worry about callbacks and error handling - error only needs to be handled once
// promise
//     .then(() => console.log('I ran'))
//     .then(() => console.log('I ran afterwards'))
//     .then(() => console.log('Then I ran'))
//     .catch((err) => console.log('uh oh error', err));

const promise = new Promise((resolve, reject) => {
    resolve();
});

promise
    .then(() => console.log('I ran'))
    .then(() => { throw new Error('Help I am an error'); })
    .then(() => console.log('I did not run'))
    .catch((err) => console.log('uh oh error', err));

// returns 
// I ran
// uh oh error Error: Help I am an error