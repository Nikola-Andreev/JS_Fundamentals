function solve(input) {

    let regex = /\b_{1}([a-zA-Z0-9]+)\b/g
    let result = input[0].match(regex)
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].trim().substr(1)
    }
    console.log(result.join(','))
}

solve(['__invalidVariable _evenMoreInvalidVariable_ _validVariable'])
solve(['Calculate the _area of the _perfectRectangle object.'])
solve(['The _id and _age variables are both integers.'])
solve(['The _id and _age_ _variables _are __both _integers.'])