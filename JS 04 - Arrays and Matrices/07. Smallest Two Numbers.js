function solve(input) {

    let arr = input.map(a => Number(a)).sort((a, b) => a-b).splice(0,2)
    console.log(arr)
}

solve(['30', '15', '50', '5'])
console.log()
solve([])
console.log()
solve([])
console.log()