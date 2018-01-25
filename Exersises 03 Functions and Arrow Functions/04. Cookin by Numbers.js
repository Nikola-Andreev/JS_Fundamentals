function solve(input) {

    let num = Number(input[0])
    for (let i = 1; i < input.length; i++) {
        switch (input[i]){
            case 'chop': num = num/2; console.log(num); break
            case 'dice': num = Math.sqrt(num); console.log(num); break
            case 'spice': num = num +1; console.log(num); break
            case 'bake': num = num*3; console.log(num); break
            case 'fillet': num = num - num*0.2; console.log(num); break
        }
    }
}

solve([32, 'chop', 'chop', 'chop', 'chop', 'chop'])
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])