/**
 * Created by _NERO_ on 9/19/2016.
 */

function solve(arr) {
    let sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i])
    }
    console.log('sum = '+sum)
    console.log('VAT = '+ sum*0.2)
    console.log('total = '+ sum*1.20)
}
