
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


// let x = 100000000;

// let y = 5;

// let array = ['text', 'ariel', x, y];

// //מדפיס את כל המערך
// console.log(array);

// //מדפיס את האובייקט הראשון במערך
// console.log(array[0]);


// // להשיג את האובייקט האחרון במערך. בכך שאני ניגש למיקום על ידי שימוש בגודל המערך שהוא שווה כרגע ל4 ופחות אחד
// console.log(array[array.length - 1]);


// //index => array[index]
// console.log(array[0]); // text 

// console.log(array[1]); // your name 

// console.log(array[2]); // value of x 

// console.log(array[3]); // value of y 

// console.log(array.length); 
//   //array.length = 4 asking if 4 is greater than 3. array length is bigger then 3 so to statment will occur
            
//   //true
//   if(array.length >= 4){
//     console.log(`array has more than 3 items. \narray size is: ${array.length}`);
// }

 let x = 100000000;

let y = 5;

let array = ['text', 'ariel', x, y, 'text', '6', '7', '8'];

console.log(array);

console.log(array[3]);

console.log(array.length)
console.log(array[array.length -1])

