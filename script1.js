var canvas = document.getElementById("my_canvas");
				// different browsers support different contexts. All support 2d
				var context = canvas.getContext('2d');


				var paddleX = 200;
				var paddleY = 460;

				var paddleWidth = 100;
				var paddleHeight = 15;

				var paddleDeltaX = 0;
				var paddleDeltaY = 0;

			  function drawPaddle(){
			    context.fillRect(paddleX,paddleY,paddleWidth,paddleHeight);
			  }

				function animate () {
					context.clearRect(0,0,canvas.width,canvas.height);
					movePaddle();
					drawPaddle();
				}

				var paddleDeltaX;
				var paddleSpeedX = 10;

				function movePaddle(){
					if (paddleMove == 'LEFT'){
						paddleDeltaX = -paddleSpeedX;
					} else if (paddleMove == 'RIGHT'){
						paddleDeltaX = paddleSpeedX;
					} else {
						paddleDeltaX = 0;
					}
					// If paddle reaches the ends, then don't let it move
					if (paddleX + paddleDeltaX < 0 || paddleX + paddleDeltaX +paddleWidth >canvas.width){
						paddleDeltaX = 0;
					}
					paddleX = paddleX + paddleDeltaX;
				}

				var gameLoop;
				var paddleMove;

				function startGame(){
					paddleMove = 'NONE';
					paddleDeltaX = 0;

					// call the animate() function every 200ms until clearInterval(gameLoop) is called
					gameLoop = setInterval(animate,20);

					// Start Tracking Keystokes
					$(document).keydown(function(evt) {
						if (evt.keyCode == 39) {
							paddleMove = 'RIGHT';
						} else if (evt.keyCode == 37){
							paddleMove = 'LEFT';
						}
					});

					$(document).keyup(function(evt) {
						if (evt.keyCode == 39) {
							paddleMove = 'NONE';
						} else if (evt.keyCode == 37){
							paddleMove = 'NONE';
						}
					});
				}

				function endGame(){
					clearInterval(gameLoop);
					context.fillText('The End!!!!',canvas.width/2,canvas.height/2);
				}

				startGame();
