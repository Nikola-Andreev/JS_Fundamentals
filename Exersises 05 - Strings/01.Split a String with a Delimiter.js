function solve(input) {

    let delimeter = input[1]
    let arr = input[0].split(delimeter)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

solve(['One-Two-Three-Four-Five','-'])