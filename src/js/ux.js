function render(data) {

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

}