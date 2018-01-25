function solve(input) {
    let x1 = Number(input[0])
    let x2 = Number(input[1])
    let z1 = Number(input[2])

    let y1 = Number(input[3])
    let y2 = Number(input[4])
    let z2 = Number(input[5])

    let X = (y1-x1)*(y1-x1)
    let Y = (y2-x2)*(y2-x2)
    let Z = (z2-z1)*(z2-z1)
    let distance = Math.sqrt(X+Y+Z)
    console.log(distance)
}

solve([1, 1, 0, 5, 4, 0])
solve([3.5, 0, 1, 0, 2, -1])