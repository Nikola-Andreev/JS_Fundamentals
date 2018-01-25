function solve(input) {

    let repeat = Number(input[1])
    let word = input[0]
    let result = ''
    for (let i = 0; i < repeat; i++) {
        result += word
    }
    console.log(result)
}

solve(['repeat','5'])