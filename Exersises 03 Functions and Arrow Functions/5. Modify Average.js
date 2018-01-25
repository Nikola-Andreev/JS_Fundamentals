function solve(input) {

    let x1 = Number(input[0])
    let y1 = Number(input[1])
    let x2 = Number(input[2])
    let y2 = Number(input[3])

    let dictance1 = Math.sqrt(Math.pow((0-x1),2)+Math.pow((0 - y1),2))
    if(isInt(dictance1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    let dictance2 = Math.sqrt(Math.pow((x2-0),2)+Math.pow((y2-0),2))
    if(isInt(dictance2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    let dictance3 = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
    if(isInt(dictance3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

    function isInt(n) {
        return n % 1 === 0;
    }
}