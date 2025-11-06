// let input1 = document.querySelector('.input1')
// let input2 = document.querySelector('.input2')
// let buttons = document.querySelector('.operator')

// buttons.forEach(button => {
    
//     button.addEventListener('click', () => {
//         let val1 = parseFloat(input1.value);
//     let val2 = parseFloat(input2.value);
//     if (isNaN(val1)||isNaN(val2)) {
//         alert("enter a valid number")
//         } 
//     // else{
//     //     let res= val1+val2
//     //     document.querySelector('h1').textContent = `Result: ${res}`; 
//     // }
// })
// let op = button.dataset.op;
// let result;
// switch (op) {
//     case '+':
//         result = val1+val2;
//         break;
        
//     default:
//         break;
//     }
    
// });
const calculator = document.querySelector('.calculator')
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const buttons = document.querySelectorAll('.operator');
const resultDisplay = document.querySelector('.result');
const numbers = document.querySelectorAll('.numbers')
const clear = document.querySelector('.clear')
const clearResult = document.querySelector('.clearresult')
const resultSound =new Audio('song.mp3')
let activeInput = input1
input1.addEventListener('focus', ()=> activeInput = input1)
input2.addEventListener('focus', ()=> activeInput = input2)

numbers.forEach(button=>{
button.addEventListener('click', ()=>{
activeInput.value +=button.textContent;  
})
} )
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);

    if (isNaN(val1) || isNaN(val2)) {
      alert("Enter valid numbers!");
      return;
    }

    const op = button.dataset.op; // get operator from data-op
    let result;

    switch(op) {
      case '+':
        result = val1 + val2;
        break;
      case '-':
        result = val1 - val2;
        break;
      case '*':
        result = val1 * val2;
        break;
      case '/':
        result = val2 !== 0 ? val1 / val2 : "Cannot divide by zero";
        break;
      case '%':
        result = val1 % val2;
        break;
      default:
        result = "Invalid operator";
    }

    resultDisplay.textContent = `😊 ${result}`;
  });
  
clear.addEventListener('click', ()=>{
  resultDisplay.textContent ='';
  input1.value= ''
  input2.value =''
})

clearResult.addEventListener('click', ()=>{
  resultDisplay.textContent ='';
})
let light = document.querySelector('.light');


let isLight = false; 
light.addEventListener('click', () => {
  if (!isLight) {
    light.style.backgroundColor = 'black';
    calculator.style.backgroundColor = 'white';
    calculator.style.color = 'black';
    input1.style.backgroundColor = '#F5F5F5';
    input1.style.color = 'black';
    input2.style.backgroundColor = '#F5F5F5';
    input2.style.color = 'black';

    numbers.forEach(btn => {
      btn.style.backgroundColor = '#F5F5F5';
      btn.style.color = '#797575';
    });

    buttons.forEach(btn => {
      btn.style.backgroundColor = '#bbb5b5';
      btn.style.color = '#f4f3f3';
    });
    
    clear.style.backgroundColor = '#6b6969';
    clearResult.style.backgroundColor = '#635f5f';

    isLight = true; 
  } else {
    light.style.backgroundColor = ''; 
    calculator.style.backgroundColor = '#1e1e2f';
    calculator.style.color = 'white';
    input1.style.backgroundColor = '#2c2c3c';
    input1.style.color = 'white';
    input2.style.backgroundColor = '#2c2c3c';
    input2.style.color = 'white';

    numbers.forEach(btn => {
      btn.style.backgroundColor = '#2c2c3c';
      btn.style.color = 'white';
    });

    buttons.forEach(btn => {
      btn.style.backgroundColor = '#3a3a4f';
      btn.style.color = 'white';
    });

    clear.style.backgroundColor = '#5a5a6a';
    clearResult.style.backgroundColor = '#4d4d5d';
    
    isLight = false; 
  }
  resultSound.currentTime = 0; // restart sound
      resultSound.play();
      setTimeout(() => {
          resultSound.pause();
      }, 2000); // st
  });
});
