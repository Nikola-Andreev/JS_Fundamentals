function solve(input) {

    let regex = /www\.[a-zA-Z0-9\-]*\.[a-z]+(\.[a-z]+)*/ig
    let result = []
    for (let i = 0; i < input.length; i++) {
        let text = input[i]
        let matches = text.match(regex)
        if(matches !== null){
            result.push(matches)
        }
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(''))
    }
}

solve(['Join WebStars now for free, at www.web-stars.com'
    ,'You can also support our partners:'
,'Internet - www.internet.com'
,'WebSpiders - www.webspiders101.com'
,'Sentinel - www.sentinel.-ko'])
solve(['Need information about cheap hotels in London?'
    ,'You can check us at www.london-hotels.co.uk!'
        ,'We provide the best services in London.'
        ,'Here are some reviews in some blogs:'
,'"London Hotels are awesome!" - www.indigo.bloggers.com'
,'"I am very satisfied with their services" - ww.ivan.bg'
,'"Best Hotel Services!" - www.rebel21.sedecrem.moc'])