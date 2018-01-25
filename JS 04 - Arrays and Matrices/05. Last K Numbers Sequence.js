function solve(input) {

    let len = Number(input[0])
    let seq = Number(input[1])
    let sum = [1,]

    for (let i = 1; i <= len - 1; i++) {
        let s = 0
        let num = Math.max(sum.length-seq,0)
        for (let j = sum.length-1; j >= num; j--) {
           s+=sum[j]
        }
        sum.push(s)
    }
    console.log(sum)
}

solve(['1','1'])
console.log()
solve(['8', '2'])
console.log()
solve(['9','5'])
console.log()