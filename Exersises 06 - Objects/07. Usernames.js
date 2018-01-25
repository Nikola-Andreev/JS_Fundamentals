function solve(input) {

    let output = {}
    for (let i = 0; i < input.length; i++) {
        if(input[i] in output){}
        else{output[input[i]] = ''}
    }
    output = Object.keys(output)
    output.sort( (a,b) =>{
        if(a.length==b.length){
            return a.localeCompare(b)
        }
        return a.length - b.length
    })

    for (let i = 0; i < output.length; i++) {
        console.log(output[i])
    }
}

solve(['Ashton'
    ,'Kutcher'
    ,'Ariel'
    ,'Lilly'
    ,'Keyden'
    ,'Aizen'
    ,'Billy'
    ,'Braston'])
console.log()
//solve([''])