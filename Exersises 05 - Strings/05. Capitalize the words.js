function solve(input) {

    let arr = input[0].split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase()
        let letter = arr[i][0].toUpperCase()
        let arr2 = arr[i].split('')
        arr2[0] = letter
        arr[i] = arr2.join('')
    }
    console.log(arr.join(' '))
}

solve(['Was that Easy? tRY thIs onE for SiZe!'])