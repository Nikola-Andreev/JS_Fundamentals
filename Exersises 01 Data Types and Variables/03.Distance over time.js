function solve(input) {

    let speed1 = Number(input[0])
    let speed2 = Number(input[1])
    let timeSeeconds = Number(input[2])

    let distance1 = (speed1*((timeSeeconds/60))/60)*1000
    let distance2 = (speed2*((timeSeeconds/60))/60)*1000
    console.log(Math.max(distance1,distance2) - Math.min(distance1,distance2))

}
solve(['0', '60', '3600'])
solve(['11', '10', '120'])
solve(['5', '-5', '40'])