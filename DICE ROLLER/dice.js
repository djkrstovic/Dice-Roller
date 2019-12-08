function showResult() {
  let l = Number(document.getElementById('player1_score').innerText);
  let r = Number(document.getElementById('player2_score').innerText);
  
  if (l < r) {
  	document.getElementById('msg').innerText = 'Player 2 wins!';
  } else if (l > r) {
  	document.getElementById('msg').innerText = 'Player 1 wins!';
  } else {
  	document.getElementById('msg').innerText = 'Equal numbers, try again.';
  }
}

// player 1
var diceL = {
  sidesL: 6,
  roll: function () {
    var randomNumberL = Math.floor(Math.random() * this.sidesL) + 1;
    return randomNumberL;
  }
}
    
function printNumberL(numberL) {
  var placeholderL = document.getElementById('player1_score');
  placeholderL.innerHTML = numberL;
}
  
var buttonL = document.getElementById('cube1');

buttonL.onclick = function() {
  resultL = diceL.roll();
  printNumberL(resultL);
  showResult();
};
  
  // player 2
var diceR = {
  sidesR: 6,
  roll: function () {
    var randomNumberR = Math.floor(Math.random() * this.sidesR) + 1;
    return randomNumberR;
  }
}
  
function printNumberR(numberR) {
  var placeholderR = document.getElementById('player2_score');
  placeholderR.innerHTML = numberR;
}

var buttonR = document.getElementById('cube2');

buttonR.onclick = function() {
  resultR = diceR.roll();
  printNumberR(resultR);
  showResult();
};
