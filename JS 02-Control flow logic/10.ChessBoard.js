/**
 * Created by _NERO_ on 9/20/2016.
 */

function solve(n) {
    let num = Number(n)

    console.log('<div class="chessboard">')
    for (let i = 0; i < num; i++) {
        console.log('<div>')
        let prev = ''
        if(i%2==0) {
             prev = 'black'
        }
        else{
             prev = 'white'
        }
        for (let j = 1; j <= num; j++) {
            console.log('<span class="'+prev+'"></span>')
            if(prev === 'white'){
                prev = 'black'
            }
            else{
                prev = 'white'
            }
        }
        console.log('</div>')
    }
    console.log('</div>')
}

solve(['3']);


