
// let x = 10;

// let y = 5;

// let result = x * y;

// alert(result);


function calc(){
     let num1 = prompt('Enter first number');

     let num2 = prompt('Enter second number');

     let result = Number(num1) + Number(num2);


// alert(`${num1} + ${num2} = ${result}`);

document.getElementById('hw').innerHTML = (`${num1} + ${num2} = ${result}`);

}



function calculate(){
let number1 = document.getElementById('num_1').value;

let number2 = document.getElementById('num_2').value;

let result = Number(number1)  +  Number(number2);

document.getElementById('hw3').innerHTML = `${number1} + ${number2} = ${result}`;
}

function _calculate(x,y){
let result = Number(x) + Number(y);
document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`

}

