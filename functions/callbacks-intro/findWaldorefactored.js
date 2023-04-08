function findWaldo(array, found) {
  array.forEach(function(item, index) {
    if (item == "Waldo") {
      found(index);
    }
  });
};

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


