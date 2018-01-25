function solve(input) {
    var a = Number(input[0])
    var b = Number(input[1])

    var area = Math.round((a*b)*100)/100
    var perinmeter = Math.round(2*(a+b)*100)/100

    console.log(area)
    console.log(perinmeter)
}

solve(['2','2'])
solve(['1','3'])
solve(['2.5','3.14'])