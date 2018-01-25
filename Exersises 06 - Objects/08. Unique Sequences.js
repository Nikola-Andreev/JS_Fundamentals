function solve(input) {

    let output = []
    for (let i = 0; i < input.length; i++) {

        let arr = input[i].substr(1,input[i].length-2).split(',').map(a => Number(a))
        if (i == 0) {
            output.push(arr)
        }
        else{
            let flag = true
            for (let j = 0; j < output.length; j++) {
                if(arr.sort().join(',')=== output[j].sort().join(',')){
                    flag = false
                    break;
                }
            }
            if (flag) {
                output.push(arr)
            }
        }
    }
    output.sort( function (a,b) {
        return a.length - b.length
    })
    for (let i = 0; i < output.length; i++) {
        output[i].sort((a,b) => {
           return b-a
        })
        let str = '['
        for (let j = 0; j < output[i].length; j++) {
            if(j<output[i].length-1){
                str+= output[i][j]+', '
            } else{
                str+=output[i][j]+']'
            }
        }
        console.log(str)
    }
}

solve(['[7.14, 7.180, 7.339, 80.099]'
    ,'[7.339, 80.0990, 7.140000, 7.18, 7.18, 7.18, 7.18, 7.18, 7.18, 7.18, 7.18]'
    ,'[7.339, 7.180, 7.14, 80.099, 80.099, 80.099, 80.099]'
    ,'[7.339, 7.180, 7.14, 80.099]'])
console.log()
solve(['[-3, -2, -1, 0, 1, 2, 3, 4]'
    ,'[10, 1, -17, 0, 2, 13]'
    ,'[4, -3, 3, -2, 2, -1, 1, 0]'])