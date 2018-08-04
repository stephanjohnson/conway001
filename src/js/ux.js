function render(canvas, data) {

    // MAKE THE DATA
    var grid = [];

    for (var y = 0; y < data.size.y; y++){
        var row=[];

        for (var x = 0; x < data.size.x; x++){

            row.push(0);

        }

        grid.push(row);
    }

    for (var p = 0; p < data.population.length; p++){

        var cell = data.population[p];
        grid[cell.y][cell.x] = 1;

    }

    // RENDER THE DATA
    var width = canvas.width;
    var height = canvas.height;
    var blockWidth = (width * 0.8) / data.size.x;
    var blockHeight = (height * 0.8) / data.size.y;
    var xOffset = width * 0.1;
    var yOffset = height * 0.1;

    // make blocks slightly smaller
    blockWidth -= 5;
    blockHeight -= 5;

    var context = canvas.getContext('2d');

    for (var y = 0; y < data.size.y; y++){
        for (var x = 0; x < data.size.x; x++){
            context.fillStyle = getFillStyle(grid[y][x]);
            context.fillRect((x * blockWidth) + xOffset, (y * blockHeight) + yOffset, blockWidth, blockHeight);
        }
    }

}

function getFillStyle(cell){
    if (cell == 1){
        return 'rgb(0, 0, 0)';
    }
    else{
        return 'rgb(255, 255, 255)';
    }
}