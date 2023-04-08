function findWaldo(array, found) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
