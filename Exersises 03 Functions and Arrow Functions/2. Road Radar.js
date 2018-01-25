function solve(input) {

    let city = 50
    let motorway = 130
    let interstate = 90
    let residental = 20
    let speed = Number(input[0])

    switch (input[1]){
        case 'city':
            if(speed > city){
                if(speed - city <= 20){
                    console.log('speeding')
                }
                else if(speed - city <= 40){
                    console.log('excessive speeding')
                }
                else {
                    console.log('reckless driving')
                }
            } break

        case 'residential':
            if(speed > residental){
                if(speed - residental <= 20){
                    console.log('speeding')
                }
                else if(speed - residental <= 40){
                    console.log('excessive speeding')
                }
                else {
                    console.log('reckless driving')
                }
            } break

        case 'interstate':
            if(speed > interstate){
                if(speed - interstate <= 20){
                    console.log('speeding')
                }
                else if(speed - interstate <= 40){
                    console.log('excessive speeding')
                }
                else {
                    console.log('reckless driving')
                }
            } break

        case 'motorway':
            if(speed > motorway){
                if(speed - motorway <= 20){
                    console.log('speeding')
                }
                else if(speed - motorway <= 40){
                    console.log('excessive speeding')
                }
                else {
                    console.log('reckless driving')
                }
            } break
    }

}

solve([40, 'sity'])

solve([21, 'residential'])

solve([120, 'interstate'])