function solve(input) {

    let arr = ['AT','CG','TT','AG','GG']
    let mainCount = 0
        let count = 0

    for (let i = 1; i <= input[0]+4; i+=4) {


        if(mainCount == Number(input[0])){
            break
        }
        console.log("**"+arr[count]+"**")
        count++
        mainCount++
        if(count == arr.length){
            count = 0
        }
        if(mainCount == Number(input[0])){
            break
        }
        console.log("*"+arr[count][0]+"--"+arr[count][1]+"*")
        count++
        mainCount++
        if(count == arr.length){
            count = 0
        }
        if(mainCount == Number(input[0])){
            break
        }
        console.log(arr[count][0]+"----"+arr[count][1])
        count++
        mainCount++
        if(count == arr.length){
            count = 0
        }
        if(mainCount == Number(input[0])){
            break
        }
        console.log("*"+arr[count][0]+"--"+arr[count][1]+"*")
        count++
        mainCount++
        if(count == arr.length){
            count = 0
        }
    }
}

solve([10])

