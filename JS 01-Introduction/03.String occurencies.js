/**
 * Created by _NERO_ on 9/19/2016.
 */

function solve(arr) {
    let count = 0
    for (var i = 0; i < arr[0].length; i++) {
        if(arr[0][i] === arr[1]){
            count++
        }
    }
    console.log(count)
}
