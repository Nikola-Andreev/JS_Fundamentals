function solve(input) {

    let regex = /\d+/g
    let text = input.join(' ')
    let results = text.match(regex)
    console.log(results.join(' '))
}

solve(['The300'
    ,'What is that?'
        ,'I think it’s the 3rd movie.'
    ,'Lets watch it at 22:45'])

    solve(['123a456'
        ,'789b987'
        ,'654c321'
        ,'0'])