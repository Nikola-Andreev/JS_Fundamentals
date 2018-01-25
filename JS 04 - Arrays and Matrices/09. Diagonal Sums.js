function solve(input) {

    let matrix = []
    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(' ').map(a => Number(a)))
    }

    let sum1 = 0
    let sum2 =0

    for (let row = 0; row < matrix.length; row++) {
        sum1+=matrix[row][row]
        sum2+=matrix[row][matrix.length-1-row]
    }
    console.log(`${sum1} ${sum2}`)
}

solve(['3 5 17',
    '-1 7 14',
    '1 -8 89'])
console.log()
solve([])
console.log()
solve([])
console.log()