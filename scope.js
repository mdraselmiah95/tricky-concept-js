const favNum = 27;

function add(first, second) {
    // console.log(mood);          // hoisting
    const result = first + second;

    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';
    }
    // console.log(mood);
    return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);

// let and const are block scope

// const favNum = 18;

function add(first, second) {
    const results = first + second;
    return results;
}

const sum2 = add(11, 88);
console.log(sum2)