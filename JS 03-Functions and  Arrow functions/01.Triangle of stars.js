function solve(input) {
    let number = Number(input[0])
    for (let i = 1; i <= number; i++) {
        console.log(new Array(i+1).join('*'))
    }
    for (let i = number-1; i > 0; i--) {
        console.log(new Array(i+1).join('*'))
    }
}

solve(['2'])
