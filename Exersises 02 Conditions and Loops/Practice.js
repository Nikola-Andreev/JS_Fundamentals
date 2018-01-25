function solve(input) {

    let num = Number(input)

    let dashes = Array(num-1).join('-')
    let str = '+'+dashes+'+'+dashes+'+'

    let empty = Array(num-1).join(' ')
    let str2 = '|'+empty+'|'+empty+'|'

    if(num % 2 == 0){
        for (let i = 1; i < num; i++) {
            if(i == 1 || i == num/2 || i == num-1) {
                console.log(str)
            }
            else{
                console.log(str2)
            }
        }
    }
    else {
        for (let i = 1; i <= num; i++) {
            if(i == 1 || i == (num+1)/2 || i == num) {
                console.log(str)
            }
            else{
                console.log(str2)
            }
        }
    }
}

solve ([99])