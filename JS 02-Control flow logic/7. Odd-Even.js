/**
 * Created by _NERO_ on 9/20/2016.
 */

function solve([num]) {
    var n = Number(num)%2
    if(n === 0){
        console.log('even')
    }
    else if(n == Math.round(n)){
        console.log('odd')
    }
    else{
        console.log('invalid')
    }
}
solve(['5']);
solve(['6']);
solve(['-1']);
solve(['0']);
solve(['pesho']);

