function solve(input) {

    let output = []
    for (let i = 0; i < input.length; i++) {
        let splited = input[i].split('|')
        let system = splited[0].trim()
        let component = splited[1].trim()
        let subComponent = splited[2].trim()
        let systems= {}
        let components = {}

        components = {
            'name':component,
            'items':[subComponent]
        }
        systems = {
            'name':system,
            'items':[components]
        }

        if(output.length === 0){
            output.push(systems)
        } else{
            let foundSystem = false
            for (let j = 0; j < output.length; j++) {
               if(output[j]['name'] === system) {
                    foundSystem = true
                   let foundComponent = false
                   for (let k = 0; k < output[j]['items'].length; k++) {
                       if(output[j]['items'][k]['name'] === component){
                           output[j]['items'][k]['items'].push(subComponent)
                           foundComponent = true
                           break
                       }
                   }
                   if(!foundComponent){
                        output[j]['items'].push(components)
                   }
               }
               if (!foundSystem && j==output.length-1) {
                   output.push(systems)
                   break
               }
            }
        }
    }

    for (let i = 0; i < output.length; i++) {
        output[i]['items'].sort((a,b) => {
            return b['items'].length - a['items'].length
        })
    }

    output.sort((a, b ) => {
        if(a['items'].length == b['items'].length){
            return a['name'].localeCompare(b['name'])
        }
        return b['items'].length - a['items'].length
    })
    for (let i = 0; i < output.length; i++) {
        console.log(output[i]['name'])
        for (let j = 0; j < output[i]['items'].length; j++) {
            console.log('|||'+output[i]['items'][j]['name'])
            for (let k = 0; k < output[i]['items'][j]['items'].length; k++) {
                console.log('||||||'+output[i]['items'][j]['items'][k])
            }
        }
    }
}

solve(['SULS | Main Site | Home Page'
    ,'SULS | Main Site | Login Page'
    ,'SULS | Main Site | Register Page'
    ,'SULS | Judge Site | Login Page'
    ,'SULS | Judge Site | Submittion Page'
    ,'Lambda | CoreA | A23'
    ,'SULS | Digital Site | Login Page'
    ,'Lambda | CoreB | B24'
    ,'Lambda | CoreA | A24'
    ,'Lambda | CoreA | A25'
    ,'Lambda | CoreC | C4'
    ,'Indice | Session | Default Storage'
    ,'Indice | Session | Default Security'])
console.log()
//solve([''])