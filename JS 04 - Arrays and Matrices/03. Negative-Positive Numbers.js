function solve(input) {

    let output = []
    for (let i = 0; i < input.length; i++) {
        if(i == 0 || Number(input[i]) >= 0){
            output.push(input[i])
        }
        else {
            output.unshift(input[i])
        }
    }
    console.log(output)
}

solve(['7', '-2', '8', '9'])
console.log()
solve([])
console.log()
solve([])
console.log()