
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
