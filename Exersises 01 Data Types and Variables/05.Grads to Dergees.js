function solve(input) {
    let grads = Number(input)
    let degrees = grads*0.9
    if (degrees == 360){
        degrees = 0
    }
    else if(degrees < 0 ){
        degrees = 360 - Math.abs(degrees%360)
    }
    else if(degrees > 360){
        degrees = degrees%360
    }
    console.log(degrees)
}
solve (-900)
solve(100)
solve(400)
solve(850)
solve(-50)