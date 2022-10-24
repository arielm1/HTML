
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



// function check(){

// let numberOne = Number(document.getElementById('vs1').value);
// let numberTwo = Number(document.getElementById('vs2').value);

// if(numberOne > numberTwo)
//  {document.getElementById('_special').innerHTML = `${numberOne} Is Greater Than ${numberTwo}`;}

//  else if (numberOne < numberTwo)
//   {document.getElementById('_special').innerHTML = `${numberOne} Is Less Than ${numberTwo}`;} 

//   else if (numberOne == numberTwo)
//   {document.getElementById('_special').innerHTML = `${numberOne} Is Same Than ${numberTwo}`;} 


// }

function check(){

     let numberOne = Number(document.getElementById('vs1').value);
     let numberTwo = Number(document.getElementById('vs2').value);
     
     if(numberOne > numberTwo)
      {document.getElementById('_special').innerHTML = `${numberOne} Is Greater Than ${numberTwo}`;}
     
     
       else if (numberOne == numberTwo)
       {document.getElementById('_special').innerHTML = `${numberOne} Is Same Than ${numberTwo}`;} 
     
     else {document.getElementById('_special').innerHTML = `${numberOne} Is Less Than ${numberTwo}`;}
}