

// things = Thing()
var person = 'Jason';

function printName(name) {
  console.log(name);
}


// setTimeout(function() {
//   printName(person);
// }, 2000);


console.log('here');
// do {
//   printName(person);
//
// } while (true);

function getThingsFromDB(query, callback) {
  console.log(query);
  var data = ['1', '3', 'cat'];

  setTimeout(function() {
    callback(data);
  }, 2000);
}

getThingsFromDB('select * from things', function(things) {
  console.log(things);

  for (var index = 0; index < things.length; index++) {
    console.log(things[index]);
  }
});



function map(array, callback) {
  var results = [];

  for (var index = 0; index < array.length; index++) {
    results.push(callback(array[index]));
  }

  return results;
}

var data = ['1', '3', 'cat'];


// var results = map(data, function(element) {
//   console.log('inside callback', element);
//
//   return parseInt(element, 10);
// });
//
//
// console.log(results);
// //
var fs = require('fs');

try {

  fs.readFile('file.tx', function(err, data) {
    if (err) {
      // handle error
      console.log(err.messge);
      throw err;
    }


    console.log('inside read file');
    console.log(err, data);

    console.log(data.toString());
  });

} catch(error) {
  console.log('catch', error.message);
}

try {
  var fileContent = fs.readFileSync('file.tx');

} catch(e) {
  console.log(e.message);
}


console.log('after file');

console.log(fileContent);




//
