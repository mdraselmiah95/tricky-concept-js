/* 
Falsy: 
false
0
empty string
undefined
null
NaN
-------------------
Truthy:
true
any number (positive or negative )
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/

// const x = 11;
// const x = -11;
// const x = true;
// const x = false;
// const x = ' ';
// const x = '';
// let x = null;
// let x = NaN;
// let x = [];
// let x = {};

let x = undefined;
if (x) {
    console.log('variable is Truthy.')
} else {
    console.log('Variable is Falsy')
}