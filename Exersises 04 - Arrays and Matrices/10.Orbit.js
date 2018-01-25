function orbit(arr) {
    let dimension = arr[0].split(' ');
    let coordinates = arr[1].split(' ');
    let rows = Number(dimension[0]);
    let cols = Number(dimension[1]);
    let hitRow = Number(coordinates[0]);
    let hitCol = Number(coordinates[1]);
    let num = 1;
    let matrix = fillMatrix(rows, cols);
    matrix = processMatrix(matrix,hitRow,hitCol);

    function fillMatrix(rows, columns) {
        let newMatrix = [];
        for (let i = 0; i < rows; i++) {
            newMatrix.push([]);
            for (let j = 0; j < columns; j++) {
                newMatrix[i].push(0)
            }

        }
        return newMatrix
    }

    function processMatrix(matrix, hitRows, hitColumn) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                let currentValue = Math.max(Math.abs(hitRows - row), Math.abs(hitColumn - col)) + 1;
                matrix[row][col] = currentValue;
            }

        }
        return matrix;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));


}

orbit([ '8 8' , '2 2' ]);