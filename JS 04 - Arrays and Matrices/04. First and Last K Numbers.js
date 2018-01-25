function solve(input) {

    let len = Number(input[0])
    let first = input.slice(1, len+1)
    console.log(first)
    let second = input.slice(input.length-1-len+1)
    console.log(second)
}

solve(['2',
    '7', '8', '9']
)
console.log()
solve([])
console.log()
solve([])
console.log()