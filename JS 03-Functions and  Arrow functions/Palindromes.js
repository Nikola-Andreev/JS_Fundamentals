((input) => {
    let splited = input[0].split(/\W+/g)
    let result =[]

    for (let i = 0; i < splited.length; i++) {
        if(splited[i] !== ''){
                result.push(splited[i])
        }
    }
    result = result.map(a => a.toUpperCase())
    console.log(result.join(', '))
})(['Hi, how are yoczvdsewrli4otjreih383275383u   dasd rw erq3er awsd ges ?'])