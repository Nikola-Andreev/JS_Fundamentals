/**
 * Created by _NERO_ on 9/19/2016.
 */

function solve([x,y,x1,y1]) {
    let distance1 = Math.pow(x-x1,2)
    let distance2 = Math.pow(y-y1,2)
    console.log(Math.sqrt(distance1 + distance2))
}
solve(['2','4','5','0'])
