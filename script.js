var canvas = document.getElementById("my_canvas");
var context = canvas.getContext("2d");
var img = new Image;
img.onload = function(){
  context.drawImage(img, childX, childY, 100, 120);
};
img.src = 'child_poker.png';
var gameLoop;

var childX = 100;
var childY = 250;


var childMove;
var child_moveX = 10;


function startGame() {
  childMove = 'NONE';
  gameLoop = setInterval(animate, 20);
  console.log("game start");
  $(document).keydown(function(event) {
    if (event.keyCode == 39) {
      console.log("press right");
      childMove = 'RIGHT';
    } else if (event.keyCode == 37) {
      console.log("press left");
      childMove = 'LEFT';
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 39) {
      childMove = 'NONE';
    } else if (e.keyCode == 37) {
      childMove = 'NONE';
    }
  });
}

function endGame() {
  clearInterval(gameLoop);
  context.fillText("Game over", canvas.width/2, canvas.height/2);
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height - 50);
  moveChild();
  drawChild();
}


function moveChild() {
  if (childMove == 'LEFT') {
    childX -= child_moveX;
  } else if (childMove == 'RIGHT') {
    childX += child_moveX;
    console.log("childX is " + childX + " child_moveX is " + child_moveX);
  } else {
    childX;
  }
}

function child() {
  img.onload = function(){
    context.drawImage(img, childX, childY, 100, 120);
  };
  img.src = 'child_poker.png';
}

function drawChild() {
  context.drawImage(img, childX, childY, 100, 120);
}

var res_score = 0;
var con_score = 0;
var child_score = 0;

function displayStatus() {
  context.fillStyle = 'rgb(50,100, 50)';
  context.font = "20px Times New Roman";
  context.clearRect(0, canvas.height-50, canvas.width, 30);
  context.fillText("Responsiveness: " + res_score, 10, canvas.height-30);
  context.fillText("Control: " + con_score, 10, canvas.height-10);
  context.fillText("Child status: " + child_score, 500, canvas.height-30);
}

startGame();
