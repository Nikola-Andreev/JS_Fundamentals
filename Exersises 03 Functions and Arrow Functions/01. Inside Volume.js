function solve(input) {

    let x1 = 10;
    let x2 = 50;
    let y1 = 20;
    let y2 = 80;
    let z1 = 15;
    let z2 = 50;

    for (let i = 0; i < input.length; i+=3) {
        let x = Number(input[i])
        let y = Number(input[i+1])
        let z = Number(input[i+2])
        let inside = false

        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    inside = true
                    console.log('inside')
                }
            }
        }
        if(!inside){
            console.log('outside')
        }
    }
}

solve([8, 20, 22])
console.log()
solve([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43])