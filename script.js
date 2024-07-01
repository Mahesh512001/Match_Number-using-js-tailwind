let input = document.getElementById('inputUser');
let submit = document.getElementById('btn');
let notification = document.getElementById('notification');
let show = document.getElementById('showResult');
let count = document.getElementById('count');
let Congratulations = document.getElementById('congrats');
var countNunber = 0;
let cong = (countent) => Congratulations.innerHTML = (countent >6) ? "You have a strong experience.": "Best of luck for next round."
submit.addEventListener('click', result);
var countent = 0;
var data;


function computercount(number) {
  show.innerHTML = '';
  let computer = document.createElement('div');
  computer.classList.add("h-[200px]", "w-[300px]", "bg-[#118ab2]", "py-[10%]","rounded-md","m-[1%]");
  let computerguess = document.createElement('p');
  computerguess.classList.add("h-[200px]", "w-[300px]");
  computerguess.innerText = "Computer's guess: " + number;
  computer.appendChild(computerguess);
  show.appendChild(computer);
}

function usercount(value) {

  let user = document.createElement('div');
  user.classList.add("h-[200px]", "w-[300px]", "bg-[#118ab2]", "py-[10%]","rounded-md","mx-[3%]");
  let userguess = document.createElement('p');
  userguess.classList.add("h-[200px]", "w-[300px]");
  userguess.innerText = "Your guess: " + value;
  user.appendChild(userguess);
  show.appendChild(user);
}

function result(enent) {
 event.preventDefault();
countNunber++;
    console.log("countNunber",countNunber)
  let num = Math.random() * 10;
let number = Math.trunc(num);
  let value = input.value; // Get the input value here
  if(countNunber == 10){
    show.innerHTML = '';
    cong();
  
setTimeout(() => {
  location.reload();
},2000);
    
  }

  if (value == number) {
    notification.innerText = 'Congratulations, you guessed the correct number!';
    
    
    countent++;
  } else if (value < number) {
    notification.innerText = 'Too low, try again!';
  } else {
    notification.innerText = 'Too high, try again!';
  }
  input.value = '';
  console.log(number,value)

  computercount(number); 
  usercount(value);
  count.innerText = countent;
  
}
