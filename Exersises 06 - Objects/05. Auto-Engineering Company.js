function solve(input) {

    let output = {}
    for (let i = 0; i < input.length; i++) {
        let [product, type, quantity] = input[i].split('|')
        product = product.trim()
        type = type.trim()
        quantity = quantity.trim()
        if(product in output){
            let found = false
            for (let j = 0; j < output[product].length; j++) {
                if(output[product][j]['type'] == type) {
                    output[product][j]['q'] += Number(quantity)
                    found = true
                }
            }
            if(!found){
                output[product].push({'type':type, 'q':Number(quantity)})
            }

        } else{
            output[product] = [{'type':type, 'q':Number(quantity)}]
        }
    }
    for (let obj in output) {
        console.log(obj)
        for (let i = 0; i < output[obj].length; i++) {
            console.log(`###${output[obj][i]['type']} -> ${output[obj][i]['q']}`)
        }
    }
}

solve(['Audi | Q7 | 1000'
    ,'Audi | Q6 | 100'
    ,'BMW | X5 | 1000'
    ,'BMW | X6 | 100'
    ,'Citroen | C4 | 123'
    ,'Volga | GAZ-24 | 1000000'
    ,'Lada | Niva | 1000000'
    ,'Lada | Jigula | 1000000'
    ,'Citroen | C4 | 22'
    ,'Citroen | C5 | 10'])
console.log()
solve(['Mercedes-Benz | 50PS | 123'
    ,'Mini | Clubman | 20000'
    ,'Mini | Convertible | 1000'
    ,'Mercedes-Benz | 60PS | 3000'
    ,'Hyunday | Elantra GT | 20000'
    ,'Mini | Countryman | 100'
    ,'Mercedes-Benz | W210 | 100'
    ,'Mini | Clubman | 1000'
    ,'Mercedes-Benz | W163 | 200'])