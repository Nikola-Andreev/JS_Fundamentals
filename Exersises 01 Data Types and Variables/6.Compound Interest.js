function solve(input) {

    let P = Number(input[0])
    let i = Number(input[1])
    let n = Number(input[2])
    let t = Number(input[3])

    i = i / 100

    n = 12/n

   let total = P * Math.pow(1+i/n ,t*n)

    console.log(total.toFixed(2))
}
solve([1500, 4.3, 3, 6])