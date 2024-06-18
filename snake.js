var blockSize=25
var row=20
var cols=20
var context
var board
var snakeX=blockSize*5;
var snakeY=blockSize*5;
var appleX;
var appleY;
var positionX=0;
var positionY=0;
var score=0
var boardSize_row=5
var boardSize_cols=5
var snakeBody
var game_over=false
var snakeBody =[]
//wnsures that the script runs only after the full page is loaded
window.onload=function(){
  board = document.getElementById("board");
  board.height= row*blockSize;
  board.width= cols*blockSize;
  context= board.getContext("2d");//the drawing context on a <canvas> element.
//getContext("2d") is a method of the canvas element that returns a drawing context on the canvas.

  place_food();
      document.addEventListener("keyup", Direction);
      setInterval(update, 1000 / 10);
  //used to repeatedly execute a given function(repeat and the time interval in milliseconds.)
  //to update the function on the canvas. 1 second refresh ten 10 time

function update(){
if (game_over){
  return;
}
  context.fillStyle = "gray"
  context.fillRect(0,0,board.height,board.width)
  //(0.0)the place,
 context.fillStyle="red"
  context.fillRect(appleX,appleY,blockSize,blockSize)

if (snakeX == appleX&& snakeY == appleY){
  snakeBody.push([snakeX,snakeY])
  //// Add new segment to the snake's body
  place_food();
  score+=10
//The push() method adds new items to the end of an array.
}for (let i = snakeBody.length - 1; i > 0; i--) {
  snakeBody[i] = snakeBody[i - 1]}
  if (snakeBody.length>0){
    snakeBody[0] = [snakeX, snakeY];
  }
  //This line sets the position of the current segment (snakeBody[i]) to be the same as the position of the segment directly in front of it
  // If the snake has any body segments, the first segment (snakeBody[0]) should follow the head's current position ([snakeX, snakeY]).
  //the i is a loop variable used to iterate over each element (or segment) in the snakeBody array.

context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 10, 20);
// "score" is the word for score, +score means the number will be added after score. 10 and 20 are positions


  context.fillStyle="blue"
    snakeX+=positionX*blockSize
    snakeY+=positionY*blockSize
    context.fillRect(snakeX,snakeY,blockSize,blockSize)
    for(let i=0; i<snakeBody.length; i++){
  context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize)
}
//snakeX = snakeX + (positionX * blockSize).
//snakeBody[i]: This represents the ith segment of the snake's body.
//These are the x and y coordinates of the ith segment of the snake's body, stored in the snakeBody array.

if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > row * blockSize) {
  game_over = true;
  alert("Game Over! Your score: " + score);
  location.reload();
}

}
}
function place_food(){
  appleX= Math.floor(Math.random()*cols)*blockSize
  appleY= Math.floor(Math.random()*cols)*blockSize
}//Math.floor is used to ensure that the randomly generated coordinates for the apple are integers that correspond within the canvas .
// e is the value of the key pressed.
function Direction(e){
  if (e.code=="ArrowUp"&&positionY!=1){
  positionX=0;
  positionY=-1;
}else if(e.code=="ArrowDown"&&positionY!=-1){
  positionX=0
  positionY=1
}else if(e.code=="ArrowRight"&&positionX!=-1){
  positionX=1
  positionY=0
}else if(e.code=="ArrowLeft"&&positionX!=1){
  positionX=-1
  positionY=0
}
}


