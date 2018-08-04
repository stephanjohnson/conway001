

function seeder(){
  return "Population": [
    { "x":2, "y":3 },
    { "x":3, "y":2 },
    { "x":4, "y":2 },
    { "x":5, "y":3 },
    { "x":3, "y":4 },
    { "x":5, "y":4 },
    { "x":4, "y":5}];
}

function cycleGeneration(culture) {
  culture.Generation += 1;
  return culture;
}
