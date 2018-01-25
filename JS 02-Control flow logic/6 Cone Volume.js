/**
 * Created by _NERO_ on 9/20/2016.
 */

function solve([radius,height]) {

    let [r,h] = [radius,height].map(Number)
    let s = Math.sqrt(r*r + h*h)
    let volume = Math.PI * r * r * h / 3;
    console.log('volume = '+volume)
    let area = Math.PI * r * (r + s);
    console.log("area = " + area);
}
solve(['3','5']);
