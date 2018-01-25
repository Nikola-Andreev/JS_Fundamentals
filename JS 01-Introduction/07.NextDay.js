/**
 * Created by _NERO_ on 9/19/2016.
 */

function solve([year,month,day]) {
    let date = new Date(year,month-1,day)
    console.log(date)
    let oneDay = 60*60*24*1000
    let nextDate = new Date(date.getTime()+oneDay)
    console.log(nextDate.getFullYear()+'-'+(nextDate.getMonth()+1)+'-'+nextDate.getDate())
}

solve(['2016', '9', '30'])

