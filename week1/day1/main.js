var myVar = 'something';
// var index = 10;

var array = [];

array.push('string');
array.push(4);


console.log(array.unshift('start'));

// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// for (let index in array) {
//   console.log(array[index]);
// }

// for (const [index, item] of array.entries()) {
//   console.log(index, item);
// }


const myString = 'this is a string';

// myString = 'this is a different string';

// console.log(myString);

const obj = {
  'a': 'this is a',
  b: 'this is b',
  array,
  myVar,
  myString,
};


obj.name = 'Jason';

obj['dog'] = 'Rover';

// console.log(obj);

const keys = Object.keys(obj);

// console.log(keys);


// for (let index = 0; index < keys.length; index++) {
//   console.log('index', index);
//   console.log(obj[keys[index]])
// }


function sayHello(name, ...rest) {
  const myName = name;
  function childScope() {
    const child = 'child';

    console.log(child);
  }

  console.log(rest);
  console.log('hello ' + name);

  return childScope;
}

// sayHello('Jason', 'Rover', 'thing1', 'thing2');

const myFunc = sayHello('Json');

// console.log(myFunc())

function otherFunc(func) {
  console.log(func.toString());


}


otherFunc(myFunc);
// var count = 0;
function counter() {
  let count = 0;
  // count += 3; ??

  function inner() {
    count += 3;

    return count;
  }

  return inner;
}

counter = counter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/**

console.log(counter())
=> 3
console.log(counter())
=> 6
console.log(counter())



*/




//
