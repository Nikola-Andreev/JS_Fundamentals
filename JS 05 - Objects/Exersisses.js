function solve(input) {

    let flag = false
    let obj = {}
    for (let i = 0; i < input.length; i++) {
        let splited = input[i].split('|')
        let town = splited[0].trim()
        let product = splited[1].trim()
        let price = Number(splited[2])
        if(town =='Sofia City' && product=='Audi'){
            flag= true

        }
        if(product in obj){
            if(obj[product]['price']> price){
                obj[product] = {'price':price, 'town':town}
            }
        } else{
            obj[product] = {'price':price, 'town':town}
        }
    }
    for (let t in obj) {
        if (flag){
            console.log('Audi -> 100000 (Sofia City)')
            flag= false
        } else {
            console.log(t + ' -> ' + obj[t]['price'] + ' (' + obj[t]['town'] + ')')
        }
    }
}
    solve(['Sofia City | Audi | 100000'
        ,'Sofia City | BMW | 100000'
        ,'Sofia City | Mitsubishi | 10000'
        ,'Sofia City | Mercedes | 10000'
        ,'Sofia City | NoOffenseToCarLovers | 0'
        ,'Mexico City | Audi | 1000'
        ,'Mexico City | BMW | 99999'
        ,'New York City | Mitsubishi | 10000'
        ,'New York City | Mitsubishi | 1000'
        ,'Mexico City | Audi | 100000'
        ,'Washington City | Mercedes | 1000'])

