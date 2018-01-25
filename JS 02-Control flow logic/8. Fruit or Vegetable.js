/**
 * Created by _NERO_ on 9/20/2016.
 */

function solve(string) {

    switch (string[0]){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit')
            break
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable')
            break
        default:
            console.log('unknown')
    }
}
solve(['tomato']);
solve(['banana']);
solve(['0']);
solve(['pesho']);

