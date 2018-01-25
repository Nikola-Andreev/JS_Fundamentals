function solve(input) {

    let output =[]
    for (let i = 0; i < input.length; i++) {
        if(i % 2 === 1){
            output.unshift(Number(input[i]*2))
        }
    }
    console.log(output)
}

solve(['3', '0', '10', '4', '7', '3'])
console.log()
solve([])
console.log()
solve([])
console.log()