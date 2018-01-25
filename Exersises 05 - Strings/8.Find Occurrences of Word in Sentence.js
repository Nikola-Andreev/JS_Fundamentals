function solve(input) {

    let text = input[0]
    let target = input[1]
    let regex = new RegExp(`\\b(${target})\\b`,'ig')
    let result = text.match(regex)
    if(result !== null) {
        console.log(result.length)
    }
    else{
        console.log('0')
    }
}
solve(['The waterfall was so high, that the child couldn’t see its peak.','the'])
solve(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there'])
solve(['How do you plan on achieving that? How? How can you even think of that?','how'])