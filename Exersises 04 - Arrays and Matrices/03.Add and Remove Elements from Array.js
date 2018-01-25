function solve(input) {

    let arr= []
    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'add') {
            arr.push(i+1)
        }
        else if(input[i] === 'remove'){
            arr.pop()
        }
    }
    if(arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
    } else{
        console.log('Empty')
    }
}

solve(['add'
    ,'add'
    ,'add'
    ,'add'])