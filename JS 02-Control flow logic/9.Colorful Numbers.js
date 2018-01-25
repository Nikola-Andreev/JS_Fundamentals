/**
 * Created by _NERO_ on 9/20/2016.
 */

function solve(n) {
    let num = Number(n)
    console.log('<ul>')
    for (let i = 1; i <= num; i++) {
        if(i % 2 == 0) {
            console.log('<li><span style="color:blue">'+i+'</span></li>')
        }
        else{
            console.log('<li><span style="color:green">'+i+'</span></li>')
        }
    }
    console.log('</ul>')
}
solve(['10']);


