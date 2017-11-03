/**

define function personMaker
  params:
    name
    list of items

  console.log(person.name)
  => 'Jason'

*/

function Person(name, items) {
  if (!(this instanceof Person)) {
    return new Person(name, items);
  }

  this.items = items;
  this.name = name;
}

Person.prototype.take = function take(item, target) {
    if (!target || !Array.isArray(target.items)) {
      throw new Error('target must have an items array');
    }
    // protect below this line

    for (let index = 0; index < target.items.length; index++) {
      if (item === target.items[index]) {
        // splice (index, amount)
        // slice  (index, endingIndex)

        target.items.splice(index, 1);

        this.items.push(item);

        return true;
      }
    }

    return false;
  };

Person.prototype.toString = function() {
  return this.name;
};

const jason = new Person('Jason', ['wallet', 'gum', 'lint']);
const someOne = Person('Some One', ['cash', 'phone', 'a ball']);
const person = new Person('Person', ['shoe', 'money']);

const backpack = {
  items: ['compass', 'map', 'gold']
};

try {
  someOne.take.call(person, 'gold', backpack);
} catch(e) {
  console.log(e.message);
}

//
// console.log(jason.toString());
console.log(someOne);
console.log(person);
console.log(backpack);
// // => 'Jason'
