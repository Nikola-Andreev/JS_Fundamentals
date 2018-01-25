/**
 * Created by _NERO_ on 9/19/2016.
 */

function solve(arr){
    let minAge = arr[0]
    let name1 = arr[1]
    let age1 = Number(arr[2])
    let name2 = arr[3]
    let age2 = Number(arr[4])
    let person1 = {name:name1, age: age1}
    let person2 = {name:name2, age: age2}
    if(person1.age>=minAge){
        console.log(person1)
    }
    if(person2.age>=minAge){
        console.log(person2)
    }
}
