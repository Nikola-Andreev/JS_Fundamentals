function solve(input) {

    let regexName = /[A-Z][a-z]+/g
    let regexSalary = /^\d+$/g
    let regexPosition

    for (let i = 0; i < input.length; i++) {
        let elements = input[i].match(regex)
        if(elements!==null){
            console.log(elements.join('\n'))
        }
    }
}

solve(['I am born on 30-Dec-1994.'
    ,'My father is born on the 29-Jul-1955.'])

solve('invalid@emai1.bg')