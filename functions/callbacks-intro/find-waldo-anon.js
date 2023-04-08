findWaldo = (names, found) => {
  names.forEach((item, index) => {
    if (item === "Waldo") {

      //found(item); this results in "found waldo at index waldo", not what we want
    found(index)
    }
  });
};
findWaldo(["Alice","Bob", "Waldo", "Winston"], index => {
  console.log("Found Waldo at index " + index + "!");
});