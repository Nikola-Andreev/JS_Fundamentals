function solve(input) {

    let count = 0
    let matrix = []

    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(' '))
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(j < input[i].length-1) {
                if (matrix[i][j] == matrix[i][j+1]){
                    count++
                }
            }
            if(i < input.length -1){
                if (matrix[i][j] == matrix[i + 1][j]){
                    count++
                }
            }
        }
    }
    console.log(count)
}

solve(['2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 8 7 5 4'])
console.log()
solve(['test yes yo ho',
    'well done yo 6',
    'not done yet 5']
)
console.log()
solve([])
console.log()