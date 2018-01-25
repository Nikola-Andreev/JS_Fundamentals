function solve(input) {

    let output = []

    for (let i = 0; i < input.length; i++) {
        let heroe = {}
        let splited = input[i].split('/')
        let name = splited[0]
        let level = Number(splited[1].trim())
        heroe['name'] = name.trim()
        heroe['level'] = level
        if(splited.length > 2) {
            let items = splited[2].split(',')
            items = items.map(a => a.trim())
            heroe['items'] = items
        } else{
            heroe['items'] = []
        }
        output.push(heroe)
    }
    console.log(JSON.stringify(output))
}

solve(['Isacc / 25 / Apple, GravityGun'
    ,'Derek / 12 / BarrelVest, DestructionSword'
    ,'Hes / 1 / Desolator, Sentinel, Antara'])
console.log()
//solve([''])