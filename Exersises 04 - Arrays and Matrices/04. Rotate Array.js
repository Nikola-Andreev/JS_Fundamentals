function solve(input) {

    let  rotations = Number(input.pop())

    if(rotations>10000){
     rotations = rotations/1000
    }
    if(rotations>1000){
        rotations = rotations /100
    }
    if (rotations > 100 ){
        rotations = rotations/10
    }
    for (let i = 1; i <= rotations; i++) {
       let el = input.pop()
       input.unshift(el)
    }

    console.log(input.join(' '))
}

solve(['Banana'
    ,'Orange'
    ,'Coconut'
    ,'Apple'
    ,'5'])