
function solve([number]) {
    let a = Math.floor(parseInt(number)/12)
    let b = Number(number)%12
    console.log(a+"'-"+b+'"')
}

solve([55])
