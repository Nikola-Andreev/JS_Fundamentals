function solve(input) {

    let subs = input[1]
    let text = input[0]
    let result = text.substr(0,subs.length)

    if(subs === result ){
        console.log('true')
    }
    else {
        console.log('false')
    }
}
solve(['Marketing Fundamentals, starting 19/10/2016'
    ,'Marketing Fundamentals, sta'])