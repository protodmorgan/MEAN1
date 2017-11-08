function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  setTimeout(function() {
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() { return 'mix it!' }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() { return 'start painting!' }
      },
      tarp: {
        product: 'A Large Tarp',
        directions: function() { return 'cover the floor' }
      }
    };

    callback(warehouse[item]);
  }, deliveryTime);
}

function receivedItem(item) {
  console.log(`Received ${ item.product }, time to ${ item.directions() }`);
}

orderSupplies('paint', function(item) {
  receivedItem(item);
  orderSupplies('brush', receivedItem);
});
