function solve(input) {

    let obj = {}
    for (let i = 0; i < input.length; i++) {
        let prod = input[i]
        let trimed = input[i].split(':')[0].trim()
        let trimed2 = input[i].split(':')[1]
        let product = trimed+':'+ trimed2
        let position = input[i][0].toUpperCase()
        if(position in obj){
            obj[position].push(product)
        } else{
            obj[position] = [product]
        }
    }

    obj = sortObj(obj)

    for (let obj1 in obj) {
        console.log(obj1)
        for (let i = 0; i < obj[obj1].length; i++) {
            console.log(`  ${obj[obj1][i]}`)
        }
    }

    function sortObj(ob) {
        let keys = Object.keys(ob).sort()
        let output = {}
        for (let i = 0; i < keys.length; i++) {
            ob[keys[i]] = ob[keys[i]].sort()
            output[keys[i]] = ob[keys[i]]
        }
        return output
    }
}

solve(['Appricot : 20.4'
    ,'Fridge : 1500'
,'TV : 1499'
,'Deodorant : 10'
,'Boiler : 300'
,'Apple : 1.25'
,'Anti-Bug Spray : 15'
,'T-Shirt : 10'])
console.log()
//solve([''])