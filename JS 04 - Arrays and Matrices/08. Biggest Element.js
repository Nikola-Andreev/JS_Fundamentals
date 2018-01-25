function solve(input) {

    let result
    for (let i = 0; i < input.length; i++) {
        let max = input[i].split(' ').map(a => Number(a)).sort((a,b) => a-b).pop()

        if(result == null || result<max){
            result = max
        }
    }
    console.log(result)
}

solve(['20 50 10',
    '8 33 145']
)
console.log()
solve([])
console.log()
solve([])
console.log()