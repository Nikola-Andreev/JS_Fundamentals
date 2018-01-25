function solve(input) {

    let subs = input[1]
    let text = input[0]
    let result = text.substr(text.length-subs.length , text.length)

    if(subs === result ){
        console.log('true')
    }
    else {
        console.log('false')
    }
}

solve(['This sentence ends with fun?','fun?'])
solve(['This is Houston, we have…','We have…'])