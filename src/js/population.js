
function seed(){
  return [
    { "x":2, "y":3 },
    { "x":3, "y":2 },
    { "x":4, "y":2 },
    { "x":5, "y":3 },
    { "x":3, "y":4 },
    { "x":5, "y":4 },
    { "x":4, "y":5}
  ];
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function cycleGeneration(culture) {
  culture.Generation += 1;

  for (var x = 0; x < culture.Size.x; x++) {

    for (var y = 0; y < culture.Size.y; y++){

      var neighbours = getNeighbours({x: x, y: y}, culture.Population);

      var neighbourCount = liveNeighbourCount(neighbours);
      if (checkBirth(neighbourCount))
      {
        addCell({x: x, y: y}, culture.Population);
      }

      if (checkDeath(neighbourCount))
      {
        killCell({x: x, y: y}, culture.Population);
      }

    }
  }

  return culture;
}

// hasCell
function hasCell(cell, population){
  for(var c in population){
    if(population[c]["x"] == cell.x && population[c]["y"] == cell.Y)
    return true;
  }
  return false;
}

// hasCell
function getCell(cell, population){
  for(var c in population){
    if(population[c]["x"] == cell.x && population[c]["y"] == cell.Y)
    return cell;
  }
  return undefined;
}

function getNeighbours(cell, population) {
  let neighbours = [];

  if (hasCell({x: cell.x - 1, y: cell.y - 1}, population) == true) { // left up
    neighbours.push(getCell({x: cell.x - 1, y: cell.y - 1}));
  }

  if (hasCell({x: cell.x, y: cell.y - 1}, population) == true) { // up
    neighbours.push(getCell({x: cell.x, y: cell.y - 1}));
  }

  if (hasCell({x: cell.x + 1, y: cell.y - 1}, population) == true) { // right up
    neighbours.push(getCell({x: cell.x + 1, y: cell.y - 1}));
  }

  if (hasCell({x: cell.x - 1, y: cell.y}, population) == true) { // left
    neighbours.push(getCell({x: cell.x - 1, y: cell.y}));
  }

  if (hasCell({x: cell.x + 1, y: cell.y}, population) == true) { // right
    neighbours.push(getCell({x: cell.x + 1, y: cell.y}));
  }

  if (hasCell({x: cell.x - 1, y: cell.y + 1}, population) == true) { // left down
    neighbours.push(getCell({x: cell.x - 1, y: cell.y + 1}));
  }

  if (hasCell({x: cell.x, y: cell.y + 1}, population) == true) { // down
    neighbours.push(getCell({x: cell.x, y: cell.y + 1}));
  }

  if (hasCell({x: cell.x + 1, y: cell.y + 1}, population) == true) { // right down
    neighbours.push(getCell({x: cell.x + 1, y: cell.y + 1}));
  }

  return neighbours;
}

function liveNeighbourCount(neighbours) {
  return neighbours.length;
}

function checkBirth(neighbourCount) {
  if (neighbourCount == 3) {
    return true;
  }
  return false;
}

function checkDeath(neighbourCount) {
  if (neighbourCount < 2 || neighbourCount >  3) {
    return true;
  }
  return false;
}

function killCell(cell, population) {
  for (var i = 0; i < population.length; i++) {
    if (cell.x == population[i].x &&  population[i].y == cell.y) {
      population.splice(i, 1);
    }
  }
}

function addCell(cell, population) {
  if (getCell(cell, population) === undefined){
    population.push(cell);
  }
}
