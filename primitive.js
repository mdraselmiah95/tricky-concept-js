/* 
Data types:

primitive  data types   immutable
1. number
2. string
3. boolean
4. undefined
5. null
7.symbol

non-primitive data

6. object 

*/

let a = 'hello';
let b = a;
// console.log(a, b);

a = 'How are you?'
// console.log(a, b);


const x = {
    job: 'web dev'
}
const y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x, y);