
let body = $('body');
let sub1 = document.getElementById('sub1');
let sub2 = document.getElementById('sub2');
let sub3 = document.getElementById('sub3');
let error1 = document.getElementById('error1');
let banner1 = document.getElementById('banner1');
let banner2 = document.getElementById('banner2');
let restart = document.getElementById('restart');
let information = $('#information');
let contColors = $('#contColors');
let welcome = $('#welcome');
let game = $('#game');
let score = $('#score');
let btnRes = $('#btnRes');
// let userName = $('#userName');
let userName = document.getElementById('userName');
// let blue = $('#blue');
// let green = $('#green');
// let red = $('#red');
// let yellow = $('#yellow');
let blueDiv = document.getElementById('blueDiv');
let blue2 = document.getElementById('blue2');
let yellowDIv = document.getElementById('yellowDIv');
let greenDiv = document.getElementById('greenDiv');
let redDiv = document.getElementById('redDiv');
let yes = document.getElementById('yes');
let no = document.getElementById('no');

// let blueV = document.getElementsByName('blueV');

let green = document.getElementById('green');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');
let roll = document.getElementById('roll');
let scoreComp = document.getElementById('scoreComp');
let scorePlayer = document.getElementById('scorePlayer');
let humanPoint = [],
    computerPoint = [],
    diceCount = 10,
    diceRoll = 0; 


// $( body ).ready(function() {
//   contColors.hide();
// });
information.hide();
contColors.hide();
game.hide();
btnRes.hide();

// NAME BUTTON


sub1.onclick = function () {
    welcome.hide(1000);
    information.fadeIn(1000);
 
};

sub2.onclick = function () {
  validationRule();
 
};

yes.onclick = function () {
  window.location.reload(true);
};

// function go() {
//     if(yes.clicked == 1 ){
//         console.log('okay')
     
// return true
//     }else{
//         console.log('like')
//         return false
//     }
//     return go
// }

// NAME VALIDATION
function validationRule() {
  if (userName.value == '' || userName.value == null) {
    // error1.innerHTML = 'Username required';
    alert('UserName required')
    return false;
    console.log('error')
    
  } else {
    information.hide(1000);
    contColors.fadeIn(1000);
    error1.innerHTML = '';
      }
}

// COLORS BUTTON

sub3.onclick = function () {
  colorValidation();
  btnRes.fadeIn(4000);
  
};
// function countingRole(){
//   if(diceRoll == diceCount){
//     alert ('Game over');

//   }
// }

function colorValidation() {
  if (blue.checked == false && green.checked == false && yellow.checked == false && red.checked == false) {
    alert(userName.value + ' must pick a color')
    console.log('working')
    // return false
  }
  else if (blue.checked == true && green.checked == true && yellow.checked == true && red.checked == true){
    alert(userName.value + ' you must pick maximum of two color')
  }
  else if (blue.checked == true && green.checked == true && yellow.checked == true && red.checked == false){
    alert(userName.value + ' you must pick maximum of two color')
  }
  else if (blue.checked == true && green.checked == true && yellow.checked == false && red.checked == true){
    alert(userName.value + ' you must pick maximum of two color')
  }
  else if (blue.checked == true && green.checked == false && yellow.checked == true && red.checked == true){
    alert(userName.value + ' you must pick maximum of two color')
  }
  else if (blue.checked == false && green.checked == true && yellow.checked == true && red.checked == true){
    alert(userName.value + ' you must maximum pick of two color')
  }
  else if (blue.checked == true && yellow.checked == true) {
    console.log('coll')
    contColors.hide(1000)
    game.fadeIn(1000);
    blue2.style.backgroundColor = 'blue';
    yellow2.style.backgroundColor = 'yellow';
    banner1.innerHTML =userName.value;
  }
  // else if (blue.checked == false && yellow.checked == false){
  //   contColors.hide(1000)
  //   game.fadeIn(1000);
  //   banner2.innerHTML = 'Computer'
  // }
  else if (blue.checked == true && green.checked == true) {
    console.log('coll')
    contColors.hide(1000)
    game.fadeIn(1000);
    blue2.style.backgroundColor = 'blue';
    green2.style.backgroundColor = 'green';
    banner1.innerHTML =userName.value;
  }
  // else if (blue.checked == false && green.checked == false) {
  //   console.log('coll')
  //   contColors.hide(1000)
  //   game.fadeIn(1000);

  //   banner2.innerHTML = 'Computer'
  // }
  else if (blue.checked == true && red.checked == true) {
    console.log('coll')
    contColors.hide(1000)
    game.fadeIn(1000);
    blue2.style.backgroundColor = 'blue';
    red2.style.backgroundColor = 'red';
    blue2.style.backgroundColor = 'blue';
    red2.style.backgroundColor = 'red';
    banner1.innerHTML = userName.value;
  }
  // else if (blue.checked == false && red.checked == false) {
  //   console.log('coll')
  //   contColors.hide(1000)
  //   game.fadeIn(1000);
    
  //   banner2.innerHTML = 'Computer'
  // }
  else if (yellow.checked == true && green.checked == true) {
    console.log('coll')
    contColors.hide(1000)
    game.fadeIn(1000);
    yellow2.style.backgroundColor = 'yellow';
    green2.style.backgroundColor = 'green';
    banner1.innerHTML =userName.value;
  }
  // else if (yellow.checked == false && green.checked == false) {
  //   console.log('coll')
  //   contColors.hide(1000)
  //   game.fadeIn(1000);
  //   banner2.innerHTML = 'Computer'
  // }
  else if (yellow.checked == true && red.checked == true) {
    console.log('coll')
    contColors.hide(1000)
    game.fadeIn(1000);
    yellow2.style.backgroundColor = 'yellow';
    red2.style.backgroundColor = 'red';
    banner1.innerHTML =userName.value;
  }
  // else if (yellow.checked == false && red.checked == false) {
  //   console.log('coll')
  //   contColors.hide(1000)
  //   game.fadeIn(1000);
   
  //   banner2.innerHTML = 'Computer'
  // }
  else if (green.checked == true && red.checked == true) {
    console.log('coll')
    contColors.hide(1000)
    game.fadeIn(1000);
    green2.style.backgroundColor = 'green';
    red2.style.backgroundColor = 'red';
    banner1.innerHTML =userName.value;
  }
  // else if (green.checked == false && red.checked == false) {
  //   console.log('coll')
  //   contColors.hide(1000)
  //   game.fadeIn(1000);
  //   banner2.innerHTML = 'Computer'
  // }
  else if (blue.checked == true && green.checked == false && yellow.checked == false && red.checked == false) {
    alert(userName.value + ' must pick two color')
    
  }
  else if (blue.checked == false && green.checked == true && yellow.checked == false && red.checked == false) {
    alert(userName.value + ' must pick two color')
    
  }
  else if (blue.checked == false && green.checked == false && yellow.checked == true && red.checked == false) {
    alert(userName.value + ' must pick two color')
    
  }
  else if (blue.checked == false && green.checked == false && yellow.checked == false && red.checked == true) {
    alert(userName.value + ' must pick two color')
  }
//   else{
//       banner2.innerHTML = 'Computer'
//   }
 }

  function rollCount(){
if(roll.clicked == true ){
//   
console.log('works')
}
   } 
   rollCount();



   function rolling(){

   }



// FUNCTIONS ROLLING

   
roll.onclick  = () => {



//   humanCheck();
    // humanTurn();
    // rollCount();
    // setTimeout(computerTurn, 3000)
 let computerValidate =() =>{
    setTimeout(function () {
    // setTimeout(news, 5);
    
    function computerStarted() {
    computerPoint.push(randomNumber)
    computerPoint.push(randomNumber2)
    
};

    let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


function shuffle(){
// console.log(img);
// console.log(randomNumber);
// console.log(img2);
// console.log(randomNumber2);
img.setAttribute("src", `${randomNumber}.png`); 
img2.setAttribute("src", `${randomNumber2}.png`); 
}

function anim(){
setTimeout(shuffle, 500)
let img = document.getElementById('img');
let img2 = document.getElementById('img2');
img.setAttribute("src", "/images/rolling-img2.gif");
img2.setAttribute("src", "/images/rolling-img2.gif");
}
anim()


 
    let rule1 = randomNumber == 6 || randomNumber2 == 6 || computerPoint.length >= 2;
            let rule2 = randomNumber == 6 && randomNumber2 == 6;
            let rule3 = humanPoint.length + computerPoint.length;
            // let sumC = computerPoint.reduce((c, d) => {
            //     return c + d;
            // }, 0)
            let humanSum = humanPoint.reduce((a, b) => {
            return a + b;
        }, 0)
            if (rule3 == 6) {
                return roll.disabled = true,
                    alert('Game Over'), alert(userName.value + ` wins ${Math.max(humanSum)}`);
            }
            //   if (diceRoll == diceCount) {
            //      return roll.disabled = true,
            //         alert('Game Over'), alert(userName.value + ` wins ${Math.max(humanSum)}`);
            // }
            
            
             else if (rule2 == 1) {
                computerStarted();
                computerValidate();
                // rollingP();
                // playStartedP()==false;
                // plyArr.pop(val1);
                // plyArr.pop(val2);
                console.log(computerPoint);
                console.log('computer play again');
                alert('Computer earns doubles')
                return;
    
            } else if (rule1 == 1) {
                computerStarted();
                // ppp();
                console.log(computerPoint)
                // diceRoll++
            } else {
                console.log('computer need 6')
            };
            let computerSum = computerPoint.reduce((c, d) => {
                return c + d;
            }, 0)
          
            scoreComp.innerHTML = `Computer score:${computerSum}`
            // alert(`Computer score:${sumC}`) 
            console.log(computerSum)
    
    
},3000);
}
// END OF COMPUTER TURN



function humanValidate(){
  
    
function humanStarted() {
humanPoint.push(randomNumber)
humanPoint.push(randomNumber2)
};

let img = document.getElementById("img");
let img2 = document.getElementById("img2");
let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


function shuffle(){
// console.log(img);
// console.log(randomNumber);
// console.log(img2);
// console.log(randomNumber2);
img.setAttribute("src", `${randomNumber}.png`); 
img2.setAttribute("src", `${randomNumber2}.png`); 
}

function anim(){
setTimeout(shuffle, 500)
let img = document.getElementById('img');
let img2 = document.getElementById('img2');
img.setAttribute("src", "/images/rolling-img2.gif");
img2.setAttribute("src", "/images/rolling-img2.gif");
}
anim()



let rule4 = randomNumber == 6 || randomNumber2 == 6 || humanPoint.length >= 2;
    let rule5 = randomNumber == 6 && randomNumber2 == 6;
    let rule6 = humanPoint.length + computerPoint.length;
    // let sumP = humanPoint.reduce((a, b) => {
    //         return a + b;
    //     }, 0)
        let computerSum = computerPoint.reduce((c, d) => {
                return c + d;
            }, 0)
   
  
    if (rule5 == 6) {
      return button.disabled = true,
        alert('Game Over'),
        alert(`Computer wins ${Math.max(computerSum)}`);
    }
    // if (diceRoll == diceCount) {
    //              return roll.disabled = true,
    //                 alert('Game Over'), alert(userName.value + ` wins ${Math.max(humanSum)}`);
    //         }
     else if (rule5 == 1 && rule6 <= 6) {
        humanStarted()
        let humanSum = humanPoint.reduce((a, b) => {
            return a + b;
        }, 0)
        return console.log(humanPoint), humanSum, console.log(humanSum), scorePlayer.innerHTML = userName.value + '' + ` Score:${humanSum}`,
            console.log('player play again');
            alert(userName.value + 'earns double')
    } else if (rule4 == 1 && rule6 <= 6) {
        humanStarted();
        diceRoll++
        let humanSum = humanPoint.reduce((a, b) => {
            return a + b;
        }, 0)
        return console.log(humanPoint), humanSum, console.log(humanSum), scorePlayer.innerHTML =userName.value + ''+ ` Score:${humanSum}`,  computerValidate();
    } else {
        return console.log('player need 6'), scorePlayer.innerHTML =userName.value + ''+ 'Score:0', computerValidate();
    }

}

// END OF HUMAN FUNCTION 

// function news(){
// alert('computer Turn')
// }
humanValidate();
console.log(diceRoll);
}
