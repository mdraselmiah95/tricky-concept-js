/* function welcomeMessage(name) {
    console.log(name);
    name();
}
 */


function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}



// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruse'];
// const myObj = {
//     name: 'Tom Brady',
//     age: 44
// };
// welcomeMessage(names);
function greetMorning(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetAfternoon(name) {
    console.log('Good afternoon', name);
}

welcomeMessage('AL amin', greetMorning);
welcomeMessage('AL shakib', greetAfternoon);
welcomeMessage('Tom Hanks', greetEvening);


function handleClick() {
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)

document.getElementById('btn').addEventListener('click', function () {
    console.log('button is clicked');
})