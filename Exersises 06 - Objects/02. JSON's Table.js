function solve(input) {

    console.log('<table>')
    for (let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i])
        console.log('   <tr>')
        console.log(`        <td>${obj.name}</td>`)
        console.log(`        <td>${obj.position}</td>`)
        console.log(`        <td>${obj.salary}</td>`)
        console.log('   <tr>')
    }
    console.log('</table>')
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}'
    ,'{"name":"Teo","position":"Lecturer","salary":1000}'
    ,'{"name":"Georgi","position":"Lecturer","salary":1000}'])
console.log()
//solve([''])