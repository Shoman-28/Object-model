

let name ="kuddos";

function add(number1, number2){
    let result = number1 + number2;
    console.log('result inside', result);
    function dobule(number){
        return number * 2;
    }
    let total = dobule(result);
    return total;
    
    
}
console.log('result outside', name);
let sum = add(13, 21);
console.log(sum);